package com.seeandyougo.seeandyougo.skj.service;

import com.seeandyougo.seeandyougo.skj.repository.CrowdRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CrowdService {
    private final CrowdRepository cr;

    // 회원 정보 받아오기
    public int[] getCrowdStatus(String place) throws IOException {
        String[] placeArr = place.split("");
        String num = placeArr[placeArr.length-1];
        String resName = num + "학생회관";
        return cr.callData(resName);
    }
}
