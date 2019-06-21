package com.panda.reviews.service;

import com.panda.reviews.pojo.Review;
import com.panda.reviews.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService  {

    @Autowired
    private ReviewRepository reviewRepository;

    //Find the reviews for a specific restaurant
    public List<Review> findAllByRestaurantId(String restaurantId){

        return this.reviewRepository.findByRestaurantId(restaurantId);
    }


    //Create or Update a review
    public String createReview(Review review){

          return reviewRepository.save(review).getReviewBody();

    }

    //Delete a review
    public void deleteReview(long reviewId){

        reviewRepository.deleteById(reviewId);
    }

//    //Update or modify a review
//
//    public Review updateReview(long reviewId){
//
//        return reviewRepository.save()
//    }

}
