package com.restaurant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestaurantApplication {

    public static void main(String[] args) {

        SpringApplication.run(RestaurantApplication.class, args);
    }

}



//The API will communicate via REST and will support the following end points:
//GET “/api/restaurants” will return a list of all restaurants.
//POST “/api/restaurant”  will add a restaurant.
//PUT “/api/restaurant/{id}” will update restaurant that has id.
//DELETE “/api/restaurant/{id}” will remove restaurant that has id (along with all reviews).
//GET “/api/restaurants/{restaurantId}/reviews” will return a list of all reviews for a particular restaurant that is identified by restaurantId.
//POST “/api/restaurants/{restaurantId}/review” will add a new review to a particular restaurant that is identified by restaurantId.