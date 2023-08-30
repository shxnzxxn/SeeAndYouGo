package com.seeandyougo.seeandyougo.table;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Menu {
    @Id @GeneratedValue
    @Column(name = "menu_id")
    private Long id;

    private String name;

    private String dept;

    private String type;

    private String menu;
    private Integer price;
    private String date;

}
