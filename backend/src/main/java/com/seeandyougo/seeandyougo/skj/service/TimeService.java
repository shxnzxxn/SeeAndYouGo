package com.seeandyougo.seeandyougo.skj.service;

import com.seeandyougo.seeandyougo.skj.repository.TimeTable;
import com.seeandyougo.seeandyougo.skj.table.Connected;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimeService {

    TimeTable timeTable;

    @Autowired
    public TimeService(TimeTable timeTable) {
        this.timeTable = timeTable;
    }

    public Connected getConnected(){
        return timeTable.findByOrderByTimeDesc();
    }
}
