package com.seeandyougo.seeandyougo.domain;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
public class capacity {
    @Id
    private String name;
    private int capacity;
}
