package com.seeandyougo.seeandyougo.table;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter @Setter
public class Capacity {
    @Id @GeneratedValue
    @Column(name = "capacity_id")
    private Long id;

    private String name;
    private Integer capacity;
}
