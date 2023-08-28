package com.seeandyougo.seeandyougo.controller;

import com.seeandyougo.seeandyougo.dto.CongestionResponse;
import com.seeandyougo.seeandyougo.service.ConnectedTableService;
import com.seeandyougo.seeandyougo.service.RawWifiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skj")
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3001")
public class SKJ_CongestionController {
    private final ConnectedTableService connectedTableService;
    private final RawWifiService rawWifiService;

    @GetMapping("/get_congestion/{restaurant}")
    public ResponseEntity<CongestionResponse> congestionRequest(@PathVariable("restaurant") String place) throws Exception {
        CongestionResponse congestionResponse = new CongestionResponse();
//        Integer connected = connectedTableService.callConnectedInDB(place);
        rawWifiService.saveRawWifiData();

<<<<<<< HEAD
//        Integer connected = connectedTableService.callConnectedInDB(place);
        rawWifiService.saveRawWifiData();

=======
>>>>>>> main
        congestionResponse.setCapacity(200);
        congestionResponse.setConnected(1);

        return ResponseEntity.ok(congestionResponse);
    }

    @GetMapping("/")
    public String index(Model model){
        return "index";
    }
}
