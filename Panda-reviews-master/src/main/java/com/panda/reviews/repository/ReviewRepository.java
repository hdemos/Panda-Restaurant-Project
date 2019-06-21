package com.panda.reviews.repository;

import com.panda.reviews.pojo.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

    @Repository
    public interface ReviewRepository extends JpaRepository<Review, Long>{
    List<Review> findByRestaurantId(String restaurantId);

}
