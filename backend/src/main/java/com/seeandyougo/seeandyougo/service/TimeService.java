package com.seeandyougo.seeandyougo.service;

import com.seeandyougo.seeandyougo.repository.ConnectedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TimeService {
    private final ConnectedRepository connectedRepository;

    public String getCurrentTime(){
        return connectedRepository.findRecentTime();
    }
}
