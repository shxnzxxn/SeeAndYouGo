package com.seeandyougo.seeandyougo.table;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class RawMenu {

    @Id @GeneratedValue
    @Column(name = "raw_menu_id")
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String raw;

}
