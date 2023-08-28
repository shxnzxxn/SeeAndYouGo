package com.seeandyougo.seeandyougo.skj.domain;

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
