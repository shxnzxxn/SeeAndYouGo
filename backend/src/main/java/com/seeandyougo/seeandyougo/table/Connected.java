package com.seeandyougo.seeandyougo.table;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter @Setter
public class Connected {

    @Id @GeneratedValue
    @Column(name = "connected_id")
    private Long id;

    private String name;
    private String time;
    private Integer connected;
}
