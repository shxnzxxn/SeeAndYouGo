package com.seeandyougo.seeandyougo.skj.table;

import org.springframework.stereotype.Repository;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Repository
public class Menu {
    @Id @GeneratedValue
    private Long id;

    private String name;

    private String dept;

    private String type;

    private String menu;
    private Integer price;
    private String date;

}
