package com.seeandyougo.seeandyougo.cjh.controller;

import com.seeandyougo.seeandyougo.cjh.entity.CongestionResponse;
import com.seeandyougo.seeandyougo.cjh.service.CrowdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/cjh")
@RequiredArgsConstructor
public class CJH_CongestionController {
    private final CrowdService crowdService;


    @GetMapping("/get_congestion/{restaurant}")
    public ResponseEntity<CongestionResponse> congestionRequest(@PathVariable("restaurant") String place){
        CongestionResponse congestionResponse = new CongestionResponse();
        int[] crowdStatus;

        try {
            crowdStatus = crowdService.getCrowdStatus(place);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        congestionResponse.setCapacity(crowdStatus[0]);
        congestionResponse.setConnected(crowdStatus[1]);

        return ResponseEntity.ok(congestionResponse);
    }

    @GetMapping("/")
    public String index(Model model){
        return "index";
    }
}
