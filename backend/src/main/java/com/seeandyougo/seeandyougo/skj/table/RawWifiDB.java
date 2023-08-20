package com.seeandyougo.seeandyougo.skj.table;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class RawWifiDB {

    @Id
    private Long id;

    @Column(length = 1000)
    private String raw;

}
