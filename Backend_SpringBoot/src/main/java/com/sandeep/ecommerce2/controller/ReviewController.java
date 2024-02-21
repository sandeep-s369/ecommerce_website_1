package com.sandeep.ecommerce2.controller;

import java.util.ArrayList; 
import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sandeep.ecommerce2.exception.ResourceNotFoundException;
import com.sandeep.ecommerce2.model.Review;
import com.sandeep.ecommerce2.repository.ReviewRepository;
import com.sandeep.ecommerce2.service.ReviewService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ReviewController {

	
	@Autowired
	private ReviewService service;
	
	@Autowired
	private ReviewRepository repo;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/reviewProducts")
	public Review addReviewToProduct(@RequestBody Review review) throws Exception {
		String tempEmailId=review.getEmailId();
		String tempCode=review.getProductCode();
		if(tempEmailId != null && tempCode != null) {
			Review reviewObj=service.fetchReviewByEmailIdAndProductCode(tempEmailId,tempCode);
			
			if(reviewObj!= null) {
				throw new Exception("user with "+tempEmailId+" is already given Review"); 
			}
		}
		
		Review reviewObj=null;
		reviewObj=service.saveReview(review);
		return reviewObj;
	
	}
	

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/reviews")
	public List<Review> getAllReviews(){
		return service.getAllReviews();
	}	
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/reviews/{id}")
	public ResponseEntity<Review> getReviewById(@PathVariable int id) {
		Review review = repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Review not exist with id :" + id));
		return ResponseEntity.ok(review);
	}
	
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/reviews/{id}")
	public ResponseEntity<Review> updateReview(@PathVariable int id, @RequestBody Review reviewDetails){
		Review review = repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		review.setValue(reviewDetails.getValue());
		review.setEmailId(reviewDetails.getEmailId());
		review.setProductCode(reviewDetails.getProductCode());
		review.setRating(reviewDetails.getRating());
		review.setReviewProduct(reviewDetails.getReviewProduct());
		Review updatedReview = repo.save(review);
		return ResponseEntity.ok(updatedReview);
	}
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/promotedReviews/{productCode}")
	public List<Review> getAllReviewsByProductCode(@PathVariable String productCode){
		List<Review> allReview=service.fetchAllReviewsByProductCode(productCode);
		List<Review> promoted=new ArrayList<Review>();
		Review review=null;
		for(int i=0;i<allReview.size();i++)
		{
		    review=allReview.get(i);
		    if(review.getValue()==1)
		    {
		    	promoted.add(review);
		    }
		}
		return promoted;
		
	}
	
	
	
}
