package com.panda.reviews.pojo;

import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long reviewId;
    private String userEmailID;
    private Date reviewDate;
    private String reviewBody;
    @Range(min =1, max=5)
    private int rating;
    private String restaurantId;

    public Review() {
    }

    public Review(String userEmailID, Date reviewDate, String reviewBody, @Range(min = 1, max = 5) int rating, String restaurantId) {
        this.userEmailID = userEmailID;
        this.reviewDate = reviewDate;
        this.reviewBody = reviewBody;
        this.rating = rating;
        this.restaurantId = restaurantId;
    }

    public long getReviewId() {
        return reviewId;
    }

    public void setReviewId(long reviewId) {
        this.reviewId = reviewId;
    }

    public String getUserEmailID() {
        return userEmailID;
    }

    public void setUserEmailID(String userEmailID) {
        this.userEmailID = userEmailID;
    }

    public Date getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(Date reviewDate) {
        this.reviewDate = reviewDate;
    }

    public String getReviewBody() {
        return reviewBody;
    }

    public void setReviewBody(String reviewBody) {
        this.reviewBody = reviewBody;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }
}
