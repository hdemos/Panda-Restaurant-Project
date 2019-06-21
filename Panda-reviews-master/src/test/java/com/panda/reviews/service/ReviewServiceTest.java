package com.panda.reviews.service;


import com.panda.ReviewApplication;
import com.panda.reviews.pojo.Review;
import com.panda.reviews.repository.ReviewRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ReviewApplication.class)
public class ReviewServiceTest {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    ReviewService reviewService;
    @Test
    public void saveTest(){
        //Setup
        Review expected = new Review("rahim@cognizant.com", new Date(),"I don't like it", 1, "dd_lrF8IrDn-W-1oRLF86g");



        //Execute
        String actual = reviewService.createReview(expected);

        //Assert

        assertEquals("The size should be 50", expected.getReviewBody(), actual);
        //Terminate



    }

    @Test
    public void updateTest(){
        //Setup
        String expected = "I am testing";

        //Execute
        Review actual = reviewRepository.findById(2L).get();

        actual.setReviewBody(expected);

        String test = reviewService.createReview(actual);
        System.out.println(test);
        //Assert
        assertEquals("The size should be 50", expected, test);


        //Terminate



    }
}
