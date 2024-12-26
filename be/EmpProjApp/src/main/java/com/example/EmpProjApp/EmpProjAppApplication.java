package com.example.EmpProjApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class EmpProjAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmpProjAppApplication.class, args);
		System.out.println("App Started...");
	}

}
