package com.servlet;

public class business {

	private String  business_code;//` varchar(10) NOT NULL,
	private String  business_name;//` varchar(20) DEFAULT NULL,
	public String getBusiness_code() {
		return business_code;
	}
	public void setBusiness_code(String business_code) {
		this.business_code = business_code;
	}
	public String getBusiness_name() {
		return business_name;
	}
	public void setBusiness_name(String business_name) {
		this.business_name = business_name;
	}
	
	
}
