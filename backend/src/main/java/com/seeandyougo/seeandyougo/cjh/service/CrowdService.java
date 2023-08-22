package com.seeandyougo.seeandyougo.cjh.service;

import com.seeandyougo.seeandyougo.cjh.controller.repository.CrowdRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CrowdService {
    private final CrowdRepository cr;

    // 회원 정보 받아오기
    public int[] getCrowdStatus(String place) throws IOException {
        String[] placeArr = place.split("");
        String num = placeArr[placeArr.length-1];
        String resName = "학생회관"+num;
        return cr.callData(resName);
    }
}
