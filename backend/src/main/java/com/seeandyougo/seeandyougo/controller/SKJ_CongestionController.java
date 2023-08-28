package com.seeandyougo.seeandyougo.controller;

import com.seeandyougo.seeandyougo.dto.CongestionResponse;
import com.seeandyougo.seeandyougo.dto.MenuResponse;
import com.seeandyougo.seeandyougo.dto.TimeResponse;
import com.seeandyougo.seeandyougo.service.*;
import com.seeandyougo.seeandyougo.table.Connected;
import com.seeandyougo.seeandyougo.table.Menu;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3001")
public class SKJ_CongestionController {
    private final ConnectedService connectedService;
    private final TimeService timeService;
    private final MenuService menuService;
    private final RawMenuService rawMenuService;
    private final RawWifiService rawWifiService;
    private final CashService cashService;


    @GetMapping("/get_congestion/{restaurant}")
    public ResponseEntity<CongestionResponse> congestionRequest(@PathVariable("restaurant") String place) throws Exception {
        String[] str = place.split("");
        String name = str[place.length()-1];
        String placeName = name+"학생회관";
        CongestionResponse congestionResponse = new CongestionResponse();

        Connected recentConnected = connectedService.getRecentConnected(placeName);
        congestionResponse.setCapacity(200);
        congestionResponse.setConnected(recentConnected.getConnected());
        congestionResponse.setDateTime(recentConnected.getTime());
        return ResponseEntity.ok(congestionResponse);
    }

    @GetMapping("/get_current_dateTime")
    public ResponseEntity<TimeResponse> currentTimeRequest() {
        TimeResponse timeResponse = new TimeResponse();
        String currentTime = timeService.getCurrentTime();
        timeResponse.setDateTime(currentTime);
        return ResponseEntity.ok(timeResponse);
    }

    @GetMapping("/get_menu/{restaurant}/{date}")
    public ResponseEntity<List<MenuResponse>> todayMenuRequest(
            @PathVariable("restaurant") String place, @PathVariable("date") String date){
        return ResponseEntity.ok(menuService.getRestaurantMenu(place, date));
    }

    @GetMapping("/getRawWifi")
    public void getRawWifi() throws Exception {
        rawWifiService.saveRawWifiData();
    }

    @GetMapping("/getTodayRawMenu")
    public void getTodayMenu() throws Exception {
        rawMenuService.saveTodayMenu();
    }

    @GetMapping("/cashWifi")
    public void cashWifi() throws Exception {
        cashService.wifiCashing();
    }

    @GetMapping("/cashTodayMenu")
    public void cashMenu() throws Exception {
        cashService.menuTodayCashing();
    }

    @GetMapping("/")
    public String index(Model model){
        return "index";
    }

    @GetMapping("/test")
    public ResponseEntity<List<MenuResponse>> test() throws Exception {
        rawMenuService.saveTodayMenu();
        cashService.menuTodayCashing();
        List<MenuResponse> menuResponses = menuService.getRestaurantMenu("제2학생회관(인재개발원)(Headquarters of Career Services)", "20230901");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        return new ResponseEntity<>(menuResponses, headers, HttpStatus.OK);
    }

    @GetMapping("/testWithWifiTime/get_congestion/{restaurant}")
    public ResponseEntity<CongestionResponse> testWithWifiTime(@PathVariable("restaurant") String place) throws Exception {
        rawWifiService.saveRawWifiData();
        cashService.wifiCashing();

        String[] str = place.split("");
        String name = str[place.length()-1];
        String placeName = name+"학생회관";
        Connected recentConnected = connectedService.getRecentConnected(placeName);
        CongestionResponse congestionResponse = new CongestionResponse();
        congestionResponse.setCapacity(200);
        congestionResponse.setConnected(recentConnected.getConnected());
        congestionResponse.setDateTime(recentConnected.getTime());
        return ResponseEntity.ok(congestionResponse);
    }
}
