package com.seeandyougo.seeandyougo.skj.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class MenuResponse {
    private Long Id;
    private String menu;
    private Integer price;
}
