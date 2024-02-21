package com.sandeep.ecommerce2.model;


import javax.persistence.Entity; 
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Product {
		
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String productBrand;
	private String productName;
	private String productCode;
	private String productPrice;
		
		public Product() {
			
		}
		public Product(int id, String productBrand, String productName, String productCode,String productPrice) {
			super();
			this.id = id;
			this.productBrand = productBrand;
			this.productName = productName;
			this.productCode = productCode;
			this.productPrice=productPrice;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getproductBrand() {
			return productBrand;
		}
		public void setproductBrand(String productBrand) {
			this.productBrand = productBrand;
		}
		public String getproductName() {
			return productName;
		}
		public void setUserName(String productName) {
			this.productName = productName;
		}
		public String getproductCode() {
			return productCode;
		}
		public void setproductCode(String productCode) {
			this.productCode = productCode;
		}
		public String getproductPrice() {
			return productPrice;
		}
		public void setproductPrice(String productPrice) {
			this.productPrice = productPrice;
		} 
		
}

