package com.servlet;

public class customer {

	private int  cust_number;//` int(11) NOT NULL,
	private String  name_customer;//` varchar(50) DEFAULT NULL,
	public int getCust_number() {
		return cust_number;
	}
	public void setCust_number(int cust_number) {
		this.cust_number = cust_number;
	}
	public String getName_customer() {
		return name_customer;
	}
	public void setName_customer(String name_customer) {
		this.name_customer = name_customer;
	}
	
	
}
