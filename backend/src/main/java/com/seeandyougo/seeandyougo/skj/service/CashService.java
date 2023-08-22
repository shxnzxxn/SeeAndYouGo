package com.seeandyougo.seeandyougo.skj.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.*;
import com.seeandyougo.seeandyougo.skj.repository.ConnectedRepository;
import com.seeandyougo.seeandyougo.skj.repository.MenuRepository;
import com.seeandyougo.seeandyougo.skj.repository.RawMenuRepository;
import com.seeandyougo.seeandyougo.skj.repository.RawWifiRepository;
import com.seeandyougo.seeandyougo.skj.table.Connected;
import com.seeandyougo.seeandyougo.skj.table.Menu;
import com.seeandyougo.seeandyougo.skj.table.RawMenu;
import com.seeandyougo.seeandyougo.skj.table.RawWifi;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CashService {
    private final RawWifiRepository rawWifiRepository;
    private final ConnectedRepository connectedRepository;
    private final RawMenuRepository rawMenuRepository;
    private final MenuRepository menuRepository;

    @Transactional
    public void wifiCashing(){
        // 보장 : rawDB들에는 꼭 단 하나의 데이터만 존재해야함.
        // 만약 rawDB에 데이터가 없다면, 이미 처리한 것이라고 하자.

        List<RawWifi> jsons = rawWifiRepository.findAll(); // 여기도 하나의 json만 있을 것.
        RawWifi tmp = jsons.get(0); // 혹시 첫번째가 아니라면, 가장 첫번째 원소만 갖고오게 하는게 좋을 듯!!
        String json = tmp.getRaw();

        JsonParser jsonParser = new JsonParser();
        JsonObject jsonObject = jsonParser.parse(json).getAsJsonObject();

        JsonArray resultArray = jsonObject.getAsJsonArray("RESULT");
        JsonObject locationData = new JsonObject();
        for (JsonElement element : resultArray) {
            JsonObject entry = element.getAsJsonObject();
            String location = entry.get("location").getAsString().split("-")[0];
            int client = entry.get("client").getAsInt();

            if (locationData.has(location)) {
                int currentClient = locationData.get(location).getAsInt();
                locationData.addProperty(location, currentClient + client);
            } else {
                locationData.addProperty(location, client);
            }
        }

        JsonArray finalResult = new JsonArray();
        for (String location : locationData.keySet()) {
            JsonObject locationInfo = new JsonObject();
            locationInfo.addProperty("name", location);
            locationInfo.addProperty("connected", locationData.get(location).getAsInt());
            finalResult.add(locationInfo);
        }

        LocalDateTime now = LocalDateTime.now();
        // 원하는 포맷을 정의
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        // LocalDateTime 객체를 문자열로 포맷팅
        String formattedDateTime = now.format(formatter);

        for (JsonElement jsonElement : finalResult) {
            JsonObject asJsonObject = jsonElement.getAsJsonObject();
            JsonElement name =  asJsonObject.get("name");
            JsonElement connected = asJsonObject.get("connected");

            Connected connectedTable = new Connected();
            connectedTable.setName(name.toString());
            connectedTable.setConnected(Integer.parseInt(connected.toString()));
            connectedTable.setTime(formattedDateTime);
            connectedRepository.save(connectedTable);
        }

        rawWifiRepository.deleteAll();
    }

    @Transactional
    public void menuCashing() {
        List<RawMenu> jsons = rawMenuRepository.findAll(); // 여기도 하나의 json만 있을 것.
        for(RawMenu rawMenu : jsons){
            String jsonData = rawMenu.getRaw();

            JsonParser jsonParser = new JsonParser();
            JsonObject jsonObject = jsonParser.parse(jsonData).getAsJsonObject();

            JsonArray resultArray = jsonObject.getAsJsonArray("RESULT");

            // "OutBlock" 배열 순회
            for (JsonElement element : resultArray) {
                JsonObject menuObject = element.getAsJsonObject();

                // 필드 값 추출
                String name = menuObject.get("CAFE_DIV_NM").getAsString();
                String dept = menuObject.get("CAFE_DTL_DIV_NM").getAsString();
                String type = menuObject.get("FOOM_DIV_NM").getAsString();
                String menu = menuObject.get("MENU_KORN_NM").getAsString();

                String priceStr = menuObject.get("MENU_PRC").getAsString();
                Integer price = new Integer(0);
                if(priceStr.length()!=0){
                    price = Integer.parseInt(priceStr);
                }
                String date = menuObject.get("FOOM_YMD").getAsString();

                // Menu 객체 생성
                Menu menuEntity = new Menu();
                menuEntity.setName(name);
                menuEntity.setDept(dept);
                menuEntity.setType(type);
                menuEntity.setMenu(menu);
                menuEntity.setPrice(price);
                menuEntity.setDate(date);

                menuRepository.save(menuEntity);
            }
        }

        rawMenuRepository.deleteAll();
    }
}