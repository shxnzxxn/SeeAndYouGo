package com.seeandyougo.seeandyougo.skj.table;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Connected {

    @Id @GeneratedValue
    private Long id;

    private String name;
    private String time;
    private Integer connected;
}
