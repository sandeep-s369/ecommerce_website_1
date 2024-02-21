package com.sandeep.ecommerce2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sandeep.ecommerce2.model.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Integer> {

	public Review findByProductCode(String productCode);
	public Review findByEmailIdAndProductCode(String emailId, String productCode);
	public List<Review> findAllByProductCode(String productCode);
}
