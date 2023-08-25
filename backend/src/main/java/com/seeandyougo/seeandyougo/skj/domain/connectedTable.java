package com.seeandyougo.seeandyougo.skj.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
@Getter @Setter
public class connectedTable {
    @EmbeddedId
    private nameTime nameTime;

    private int connected;
}
