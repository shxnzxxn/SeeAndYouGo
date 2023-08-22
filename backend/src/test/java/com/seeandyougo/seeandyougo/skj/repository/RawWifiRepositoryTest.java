package com.seeandyougo.seeandyougo.skj.repository;

import com.seeandyougo.seeandyougo.skj.service.CashService;
import com.seeandyougo.seeandyougo.skj.service.RawWifiService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional // 테스트에서 이 어노테이션은, 기본적으로 롤백을 해준다.
class RawWifiRepositoryTest {
    @Autowired
    RawWifiRepository rawWifiRepository;
    @Autowired
    RawWifiService rawWifiService;
    @Autowired
    CashService cashService;

    @Test
    @Rollback(false)
    public void deleteAll_test() throws Exception {
        // given
//        rawWifiService.saveRawWifiData();

        // when
//        rawWifiRepository.deleteAll();
        // then
//        cashService.wifiCashing();



    }


}