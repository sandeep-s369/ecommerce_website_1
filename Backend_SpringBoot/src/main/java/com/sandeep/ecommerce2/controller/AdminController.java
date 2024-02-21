package com.sandeep.ecommerce2.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sandeep.ecommerce2.model.Admin;
import com.sandeep.ecommerce2.service.AdminService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AdminController {

	@Autowired
	private AdminService service;
	
	@PostMapping("/adminUser")
	@CrossOrigin(origins="http://localhost:4200")
	public Admin adminLogin(@RequestBody Admin admin) throws Exception {
		String tempEmailId=admin.getEmailId();
		String tempPass=admin.getPassword();
		Admin adminObj=null;
		if(tempEmailId != null && tempPass != null) {
			adminObj=service.fetchAdminByEmailIdAndPassword(tempEmailId,tempPass);
		}
		
		if(adminObj == null) {
			throw new Exception("Bad credentials");
		}
		return adminObj;
	}
	
	
	
	
	
}
