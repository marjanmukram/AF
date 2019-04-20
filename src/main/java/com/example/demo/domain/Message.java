package com.example.demo.domain;

import java.util.Date;

import net.minidev.json.annotate.JsonIgnore;

public class Message {
	@Id
	private String id;
	
	@NotEmpty
	private String message;
	
	@JsonIgnore
	private boolean deleted;
	
	@CreatedDate
	private Date createdAt;
	
	@LastModifiedDate
	private Date updatedAt;
	
}
