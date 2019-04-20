package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Message;
@RestController
@RequestMapping(value = "/messsages")
public class MessageController {
	//Retrieve a message
	public Message getMessage(){
		return null; 
	}
	
	
	
}
