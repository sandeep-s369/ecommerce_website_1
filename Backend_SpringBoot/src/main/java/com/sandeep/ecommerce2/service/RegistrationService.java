package com.sandeep.ecommerce2.service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;

import com.sandeep.ecommerce2.model.User;
import com.sandeep.ecommerce2.repository.RegistrationRepository;

@Service
public class RegistrationService {

	@Autowired
	private RegistrationRepository repo;
	
	public User saveUser(User user) {
		
		return repo.save(user);
		
	}
	
	 
	public User fetchUserByEmailId(String email) {
		return repo.findByEmailId(email);
	}
	
	public User fetchUserByEmailIdAndPassword(String email,String password) {
		return repo.findByEmailIdAndPassword(email, password);
	}


	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
}
