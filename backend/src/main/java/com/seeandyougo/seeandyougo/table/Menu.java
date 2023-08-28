package com.seeandyougo.seeandyougo.table;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
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
