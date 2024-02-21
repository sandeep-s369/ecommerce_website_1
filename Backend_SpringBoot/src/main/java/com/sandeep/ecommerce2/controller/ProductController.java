package com.sandeep.ecommerce2.controller;

import java.util.List;  


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.sandeep.ecommerce2.exception.ResourceNotFoundException;
import com.sandeep.ecommerce2.model.Product;
import com.sandeep.ecommerce2.repository.ProductRepository;
import com.sandeep.ecommerce2.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
	
	@Autowired
	private ProductService service;
	

	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return service.getAllProducts();
	}	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/products/{searchString}")
	public ResponseEntity<List<Product>> getProductsBySearchString(@PathVariable("searchString") String searchString){
		
		try {
			return new ResponseEntity<>(service.fetchProductsBySearchString(searchString),HttpStatus.OK);
		}catch(Exception e) {
			System.out.println(e);
		}
		return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);		
		
	}
	
}
