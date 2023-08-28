package com.seeandyougo.seeandyougo.domain;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.time.LocalDateTime;

@Embeddable
public class nameTime implements Serializable {
    private String name;
    private LocalDateTime time;
}
