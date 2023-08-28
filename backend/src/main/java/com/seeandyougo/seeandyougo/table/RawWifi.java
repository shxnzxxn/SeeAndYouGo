package com.seeandyougo.seeandyougo.table;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class RawWifi {

    @Id @GeneratedValue
    private Long id;

    @Column(length = 1000)
    private String raw;

}
