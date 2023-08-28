package com.seeandyougo.seeandyougo.skj.service;

import com.seeandyougo.seeandyougo.service.CashService;
import com.seeandyougo.seeandyougo.service.RawMenuService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional // 테스트에서 이 어노테이션은, 기본적으로 롤백을 해준다.
class RawMenuServiceTest {
    @Autowired
    RawMenuService rawMenuService;

    @Autowired
    CashService cashService;
    @Test
    @Rollback(false)
    public void test() throws Exception {
        // given
        rawMenuService.saveTodayMenu();
        cashService.menuTodayCashing();


        // when

        // then

    }


}