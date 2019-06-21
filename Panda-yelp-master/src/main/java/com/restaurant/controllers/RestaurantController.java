package com.restaurant.controllers;



import com.restaurant.pojo.Restaurant;
import com.restaurant.services.RestaurantAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantAPIService restaurantAPIService;

    //Controller for get all restaurants

    @CrossOrigin
    @GetMapping("/searchRestaurant/{zipcode}/{distance}")
    public List<Restaurant> getRestaurants(
            @PathVariable("zipcode")Integer zipcode,
            @PathVariable("distance")Double distance ){

        return restaurantAPIService.restaurantSearch(zipcode,distance);
    }


    //Controller for Restaurant Profile Service

}
