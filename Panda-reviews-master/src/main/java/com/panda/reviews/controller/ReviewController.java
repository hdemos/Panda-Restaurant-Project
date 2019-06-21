package com.panda.reviews.controller;

import com.panda.reviews.pojo.Review;
import com.panda.reviews.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("/review")
@RestController
public class ReviewController {

    @Autowired
    private ReviewService service;

    @GetMapping
    public List<Review> getAllReviewsForRestaurant(@RequestParam(required = true, name = "resId") String restaurantId){
        return service.findAllByRestaurantId(restaurantId);
    }

    @PutMapping("/addReview")
    public String writeReview(@RequestBody Review newReview){

       return service.createReview(newReview);
    }

    @DeleteMapping("/deleteReview")
    public void deleteReviewById(@RequestParam(required = true, name= "reviewId") long reviewId){
        service.deleteReview(reviewId);
    }

}


