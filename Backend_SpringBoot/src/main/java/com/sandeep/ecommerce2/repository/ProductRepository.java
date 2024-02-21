package com.sandeep.ecommerce2.repository;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sandeep.ecommerce2.model.Product;


public interface ProductRepository  extends JpaRepository<Product,Integer> {
	public Product findByProductName(String productName);
	public Product findByProductBrand(String productBrand);
	public Product findByProductCode(String productCode);
	
	
	@Query("select u FROM Product u where u.productBrand like %?1% or u.productName like %?1% or u.productCode like %?1%")
	public List<Product> findBySearchString(@Param("searchString") String searchString);
	
	
}
