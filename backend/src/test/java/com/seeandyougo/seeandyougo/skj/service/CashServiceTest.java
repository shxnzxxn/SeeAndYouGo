package com.seeandyougo.seeandyougo.skj.service;

import com.seeandyougo.seeandyougo.repository.ConnectedRepository;
import com.seeandyougo.seeandyougo.service.CashService;
import com.seeandyougo.seeandyougo.service.ConnectedService;
import com.seeandyougo.seeandyougo.service.MenuService;
import com.seeandyougo.seeandyougo.service.RawMenuService;
import com.seeandyougo.seeandyougo.table.Connected;
import com.seeandyougo.seeandyougo.table.Menu;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
@Transactional // 테스트에서 이 어노테이션은, 기본적으로 롤백을 해준다.
class CashServiceTest {
    @Autowired
    ConnectedService connectedService;
    @Autowired
    ConnectedRepository connectedRepository;

    @Autowired
    CashService cashService;

    @Autowired
    RawMenuService rawMenuService;

    @Autowired
    MenuService menuService;

    @Test
    @Rollback(false)
    public void 최근_식당인원_불러오기() throws Exception {
        // given
        Connected connected2 = new Connected();
        connected2.setName("2학생회관");
        connected2.setTime("2023-08-19 22:30:49");
        connected2.setConnected(1);
        connectedRepository.save(connected2);

        Connected connected4 = new Connected();
        connected4.setName("3학생회관");
        connected4.setTime("2023-08-19 22:30:49");
        connected4.setConnected(2);
        connectedRepository.save(connected4);

        Connected connected1 = new Connected();
        connected1.setName("2학생회관");
        connected1.setTime("2023-08-20 22:30:49");
        connected1.setConnected(3);
        connectedRepository.save(connected1);

        Connected connected3 = new Connected();
        connected3.setName("3학생회관");
        connected3.setTime("2023-08-20 22:30:49");
        connected3.setConnected(4);
        connectedRepository.save(connected3);
       // when

        // then

    }
}