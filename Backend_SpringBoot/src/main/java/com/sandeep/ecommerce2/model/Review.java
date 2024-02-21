package com.sandeep.ecommerce2.model;

import javax.persistence.Entity; 
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Review {

	   @Id
	   @GeneratedValue(strategy=GenerationType.AUTO)
	   private int id;
	   private int value;
	   private String emailId;
	   private String productCode;
	   private int rating;
	   private String reviewProduct;
	   
	   
	   
	   
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Review(int id, int value, String emailId, String productCode, int rating, String reviewProduct) {
		super();
		this.id = id;
		this.value = value;
		this.emailId = emailId;
		this.productCode = productCode;
		this.rating = rating;
		this.reviewProduct = reviewProduct;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getReviewProduct() {
		return reviewProduct;
	}
	public void setReviewProduct(String reviewProduct) {
		this.reviewProduct = reviewProduct;
	}
	   
	   
	   
}
