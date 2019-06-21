package com.panda.reviews.repository;


import com.panda.ReviewApplication;
import com.panda.reviews.pojo.Review;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;
import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ReviewApplication.class)
public class ReviewRepositoryTest {

    @Autowired
    ReviewRepository reviewRepository;


    @Transactional
    Review insertTestData(String restaurantId){
        Review review =new Review("test@cognizant.com", new Date(), "Today repository test", 4, restaurantId);
        return reviewRepository.save(review);
    }

    @Test
    public void findRestaurantByIdTest(){
        //Setup
        Review review =insertTestData("DK_-WdFdbCFWtkNbm4FZyg");



        //Execute
        List<Review> actual = reviewRepository.findByRestaurantId("DK_-WdFdbCFWtkNbm4FZyg");
        //Assert
        assertEquals("the restaurantId found should be", actual.stream()
                        .filter(r ->
                                review.getReviewDate().equals(review.getReviewDate())
                                &&review.getRating()==r.getRating()
                                &&review.getRestaurantId().equals(r.getRestaurantId())
                                &&review.getReviewBody().equals(r.getReviewBody())
                                &&review.getUserEmailID().equals(r.getUserEmailID())).count(),1l);

        reviewRepository.delete(review);
        //Terminate

    }
}
