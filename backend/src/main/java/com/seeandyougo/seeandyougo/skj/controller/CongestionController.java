package com.seeandyougo.seeandyougo.skj.controller;

import com.seeandyougo.seeandyougo.skj.dto.CongestionResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skj")
public class CongestionController {
    @GetMapping("/get_congestion/restaurant2")
    public ResponseEntity<CongestionResponse> congestionRequest(){
        CongestionResponse congestionResponse = new CongestionResponse();
        congestionResponse.setCapacity(100);
        congestionResponse.setConnected(50);

        return ResponseEntity.ok(congestionResponse);
    }
}
