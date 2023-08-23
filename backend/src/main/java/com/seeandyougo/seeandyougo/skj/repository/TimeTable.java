package com.seeandyougo.seeandyougo.skj.repository;

import com.seeandyougo.seeandyougo.skj.table.Connected;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeTable extends JpaRepository<Connected,Long> {

    Connected findByOrderByTimeDesc();
}
