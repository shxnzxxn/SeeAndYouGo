package com.seeandyougo.seeandyougo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class IterService {
    private final RawMenuService rawMenuService;
    private final CashService cashService;

    @Transactional
    @Scheduled(fixedDelay = 5000, initialDelay = 1000)
    public void repeatCallGetMenu() throws Exception { // 하루에 한번씩 갱신하느건??
        System.out.println("hello");
        rawMenuService.saveTodayMenu();
        cashService.menuTodayCashing();
    }

}
