package com.seeandyougo.seeandyougo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class MenuResponse {
    private List<String> menu;
    private Integer price;
    private String dept;
    private String type;
}
