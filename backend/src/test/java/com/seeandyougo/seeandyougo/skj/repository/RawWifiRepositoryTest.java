package com.seeandyougo.seeandyougo.skj.repository;

<<<<<<< HEAD
import com.seeandyougo.seeandyougo.repository.RawWifiRepository;
import com.seeandyougo.seeandyougo.service.CashService;
import com.seeandyougo.seeandyougo.service.RawWifiService;
=======
import com.seeandyougo.seeandyougo.skj.service.CashService;
import com.seeandyougo.seeandyougo.skj.service.RawWifiService;
>>>>>>> main
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
<<<<<<< HEAD
        rawWifiService.saveRawWifiData();
=======
//        rawWifiService.saveRawWifiData();
>>>>>>> main

        // when
//        rawWifiRepository.deleteAll();
        // then
//        cashService.wifiCashing();



    }


}