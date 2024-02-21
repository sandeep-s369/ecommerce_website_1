package com.sandeep.ecommerce2.service;


import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;

import com.sandeep.ecommerce2.model.Admin;
import com.sandeep.ecommerce2.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository repo;
	
	public Admin fetchAdminByEmailIdAndPassword(String email,String password){
		return repo.findByEmailIdAndPassword(email,password);
	}
	
}
