package com.seeandyougo.seeandyougo.skj.service;

import com.seeandyougo.seeandyougo.skj.repository.ConnectedRepository;
import com.seeandyougo.seeandyougo.skj.table.Connected;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional // 테스트에서 이 어노테이션은, 기본적으로 롤백을 해준다.
class CashServiceTest {
    @Autowired ConnectedTableService connectedTableService;
    @Autowired
    ConnectedRepository connectedRepository;


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


        Integer res = connectedTableService.callConnectedInDB("2학생회관");// rawDB는 아무것도 없으니까, 최신 2학 인원을 꺼내와야함. 3이 되어야함.
        System.out.println(res);

        org.assertj.core.api.Assertions.assertThat(res).isEqualTo(3);

        // when

        // then

    }



}