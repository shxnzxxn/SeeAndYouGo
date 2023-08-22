package com.seeandyougo.seeandyougo.table;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class RawMenu {

    @Id
    private Long id;

    @Column(length = 65535) // 65535 : 테이블에 삽입할 수 있는 문자열 최대 길이
    private String raw;

}
