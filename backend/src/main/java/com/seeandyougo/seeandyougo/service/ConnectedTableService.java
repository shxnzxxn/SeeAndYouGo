package com.seeandyougo.seeandyougo.service;

import com.seeandyougo.seeandyougo.repository.ConnectedRepository;
import com.seeandyougo.seeandyougo.table.Connected;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConnectedTableService {
    private final ConnectedRepository connectedRepository;

    public Connected callConnectedInDB(String restaurantName){
        Connected recent = connectedRepository.findRecent(restaurantName);
//        Integer res = new Integer(0);
//        for (Connected connected : recent) {
//            String name = connected.getName();
//            if (name.equals(restaurantName)) {
//                res = connected.getConnected();
//            }
//        }
        return recent;
    }
}
