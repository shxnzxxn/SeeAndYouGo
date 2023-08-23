package com.seeandyougo.seeandyougo.skj.controller.repository;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.seeandyougo.seeandyougo.skj.dto.CongestionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

@Repository
@RequiredArgsConstructor
public class CrowdRepository {
    private final EntityManager em;
    private Integer capacity = 200;
    private Integer connected;


    public int[] callData(String place) throws IOException {
        String apiUrl = "http://localhost:3000/svc/offcam/pub/WifiAllInfo"; // API 엔드포인트
        String queryParams = "?AUTH_KEY=asd&limit_seconds=100000&limit_requests=100000"; // 필요한 매개변수

        // URL 생성
        URL url = new URL(apiUrl + queryParams);

        // HttpURLConnection 설정
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        // 응답 코드 확인
        int responseCode = connection.getResponseCode();

        // 응답 내용 읽기
        if (responseCode == HttpURLConnection.HTTP_OK) {
            InputStream inputStream = connection.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            StringBuilder response = new StringBuilder();

            while ((line = reader.readLine()) != null) {
                response.append(line);
            }

            reader.close();
            String responseData = response.toString();


            JsonElement jsonElement = JsonParser.parseString(responseData);
            if (jsonElement.isJsonObject()) {
                JsonObject jsonObject = jsonElement.getAsJsonObject();

                JsonArray outBlockArray = jsonObject.getAsJsonArray("OUT_BLOCK");
                JsonArray resultArray = jsonObject.getAsJsonArray("RESULT");

                JsonObject newJsonObject = new JsonObject();
                JsonArray newOutBlockArray = new JsonArray();
                JsonObject newOutBlockObject = new JsonObject();
//                newOutBlockObject.addProperty("MSG", "success");
                newOutBlockArray.add(newOutBlockObject);
                newJsonObject.add("OUT_BLOCK", newOutBlockArray);

                JsonObject newResultObject = new JsonObject();
                JsonArray newResultArray = new JsonArray();
                int totalClient = 0;

                for (JsonElement outBlock : outBlockArray) {
                    JsonObject outBlockObject = outBlock.getAsJsonObject();
                    String msg = outBlockObject.get("MSG").getAsString();

                    if (msg.equals("exceed limit_requests per limit_seconds")) {
                        return new int[]{capacity, connected};
                    }
                }
                for (JsonElement result : resultArray) {
                    JsonObject resultObject = result.getAsJsonObject();
                    String location = resultObject.get("location").getAsString();
                    int client = resultObject.get("client").getAsInt();

                    if (location.contains(place)) totalClient += client;
                }

//                newResultObject.addProperty("location", "2학생회관");
                newResultObject.addProperty("capacity", capacity);
                newResultObject.addProperty("client", totalClient);
                newResultArray.add(newResultObject);

                this.connected = totalClient;

                newJsonObject.add("RESULT", newResultArray);
                System.out.println(newJsonObject.toString());

            } else {
                System.out.println("Request Failed");
            }

            connection.disconnect(); // 연결 종료
        }
        return new int[]{capacity, connected};
    }
}
