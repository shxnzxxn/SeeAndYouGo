//package com.seeandyougo.seeandyougo.cjhjpaapi.service;
//
//import com.seeandyougo.seeandyougo.cjhjpaapi.controller.repository.CapacityRepository;
//import com.seeandyougo.seeandyougo.cjhjpaapi.controller.repository.ConnectedTableRepository;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import java.io.IOException;
//import java.util.List;
//
//@Service
//@Transactional(readOnly = true)
//public class CrowdService {
//    private final ConnectedTableRepository connectedTableRepository;
//    private final CapacityRepository capacityRepository;
//
//    public CrowdService(ConnectedTableRepository connectedTableRepository, CapacityRepository capacityRepository) {
//        this.connectedTableRepository = connectedTableRepository;
//        this.capacityRepository = capacityRepository;
//    }
//
//    public List<Integer>[] getCrowdStatus(String place) throws IOException {
//        String[] placeArr = place.split("");
//        String num = placeArr[placeArr.length - 1];
//        String resName = "학생회관" + num;
//
//         List<Integer> connectedUsers = capacityRepository.findConnectedByName(resName);
//        List<Integer> totalCapacity = connectedTableRepository.findConnectedByNameOrderByTimeDesc(resName);
//
//
//        List<Integer>[] arrays = new List[]{connectedUsers, totalCapacity};
//        return arrays;
//    }
//}