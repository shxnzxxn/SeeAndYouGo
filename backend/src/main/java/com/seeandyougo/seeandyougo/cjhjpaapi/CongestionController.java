//package com.seeandyougo.seeandyougo.cjhjpaapi;
//
//import com.seeandyougo.seeandyougo.cjhjpaapi.entity.CongestionResponse;
//import com.seeandyougo.seeandyougo.cjhjpaapi.service.CrowdService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.ui.Model;
//import java.io.IOException;
//import java.util.List;
//
//@RestController
//@RequestMapping("/cjh")
//@RequiredArgsConstructor
//public class CongestionController {
//    private final CrowdService crowdService;
//
//    @GetMapping("/get_congestion/{restaurant}")
//    public ResponseEntity<CongestionResponse> congestionRequest(@PathVariable("restaurant") String place){
//        CongestionResponse congestionResponse = new CongestionResponse();
//        List<Integer>[] crowdStatus;
//
//        try {
//            crowdStatus = crowdService.getCrowdStatus(place);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//
//        congestionResponse.setCapacity(crowdStatus[0]);
//        congestionResponse.setConnected(crowdStatus[1]);
//
//        return ResponseEntity.ok(congestionResponse);
//    }
//
//    @GetMapping("/")
//    public String index(Model model){
//        return "index";
//    }
//}