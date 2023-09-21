package com.seeandyougo.seeandyougo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SeeandyougoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeeandyougoApplication.class, args);
	}

}
