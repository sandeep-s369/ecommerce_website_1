package com.sandeep.ecommerce2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandeep.ecommerce2.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Integer> {

	public Admin findByEmailIdAndPassword(String emailId,String password);
	
	
}

