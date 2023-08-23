package com.seeandyougo.seeandyougo.pjt.controller;

import com.seeandyougo.seeandyougo.pjt.dto.CongestionResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pjt")
@CrossOrigin(origins="http://localhost:3001")
public class PJT_CongestionController {
    @GetMapping("/get_congestion/restaurant2")
    public ResponseEntity<CongestionResponse> congestionRequest(){
        CongestionResponse congestionResponse = new CongestionResponse();
        congestionResponse.setCapacity(100);
        congestionResponse.setConnected(50);

        return ResponseEntity.ok(congestionResponse);
    }
}
