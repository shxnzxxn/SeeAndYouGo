package com.seeandyougo.seeandyougo.service;

import com.seeandyougo.seeandyougo.dto.CongestionResponse;
import com.seeandyougo.seeandyougo.repository.ConnectedRepository;
import com.seeandyougo.seeandyougo.table.Connected;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConnectedService {
    private final ConnectedRepository connectedRepository;

    public Connected getRecentConnected(String restaurantName){
        Connected result = connectedRepository.findRecent(restaurantName);
//        CongestionResponse congestionResponse = new CongestionResponse();
//        for (Connected connected : recent) {
//            String name = connected.getName();
//            if (name.equals(restaurantName)) {
//                congestionResponse.setConnected(connected.getConnected());
//                congestionResponse.setDateTime(connected.getTime());
//            }
//        }
        return result;
    }
}
