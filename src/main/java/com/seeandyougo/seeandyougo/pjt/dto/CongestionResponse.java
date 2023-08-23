package com.seeandyougo.seeandyougo.pjt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CongestionResponse {
    private Integer capacity;
    private Integer connected;
}
