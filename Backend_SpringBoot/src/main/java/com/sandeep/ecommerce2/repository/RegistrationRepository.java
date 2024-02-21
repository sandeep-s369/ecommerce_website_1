package com.sandeep.ecommerce2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandeep.ecommerce2.model.User;

public interface RegistrationRepository extends JpaRepository<User,Integer>  {

	public User findByEmailId(String emailId);
	
	public User findByEmailIdAndPassword(String emailId,String password);
}
