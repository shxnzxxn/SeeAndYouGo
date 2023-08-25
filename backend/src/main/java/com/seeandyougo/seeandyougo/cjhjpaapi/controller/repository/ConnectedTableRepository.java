//package com.seeandyougo.seeandyougo.cjhjpaapi.controller.repository;
//
//import com.seeandyougo.seeandyougo.cjhjpaapi.entity.ConnectedTable;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface ConnectedTableRepository extends JpaRepository<ConnectedTable, Long> {
//
//
//    // 특정 이름의 레스토랑의 최신 연결된 사용자 수를 조회하는 메서드
//    List<Integer> findConnectedByNameOrderByTimeDesc(String name);
//}