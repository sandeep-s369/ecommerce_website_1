package com.sandeep.ecommerce2.service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.ecommerce2.model.Review;
import com.sandeep.ecommerce2.repository.ReviewRepository;

@Service
public class ReviewService {
  
	  @Autowired
	  private ReviewRepository repo;
	  
	 public List<Review> getAllReviews(){
		 return repo.findAll();
	 }
	  
	  public Review saveReview(Review review){
		  return repo.save(review);
	  }
	  
	  public Review fetchReviewByProductCode(String productCode) {
			return repo.findByProductCode(productCode);
		}
	  
	  public Review fetchReviewByEmailIdAndProductCode(String emailId,String productCode) {
		    return repo.findByEmailIdAndProductCode(emailId,productCode);
	  }
	  
	  public List<Review> fetchAllReviewsByProductCode(String productCode){
		  return repo.findAllByProductCode(productCode);
	  }
}
