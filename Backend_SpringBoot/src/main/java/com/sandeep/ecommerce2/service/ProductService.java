package com.sandeep.ecommerce2.service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.sandeep.ecommerce2.model.Product;
import com.sandeep.ecommerce2.repository.ProductRepository;



@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repo;
	
	public Product fetchProductByProductBrand(String productBrand) {
		return repo.findByProductBrand(productBrand);
	}
	
	public Product fetchProductByProductName(String productName) {
		return repo.findByProductName(productName);
	}
	public Product fetchProductByProductCode(String productCode) {
		return repo.findByProductBrand(productCode);
	}

	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	public List<Product> fetchProductsBySearchString(String searchString) {
		
		return repo.findBySearchString(searchString);
	}
	
	
	     

}
