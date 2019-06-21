
import com.restaurant.RestaurantApplication;
import com.restaurant.pojo.Restaurant;
import com.restaurant.services.RestaurantAPIService;

import org.junit.*;
import static org.junit.Assert.*;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.List;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = RestaurantApplication.class)
public class RestaurantAPIServiceTest {
    @Autowired
    RestaurantAPIService restaurantAPIService;
    @Test
    public void testAPIKey(){
        //Setup

        int expected = 50;
        System.out.println(restaurantAPIService);

        //Execute
        List<Restaurant> actual = restaurantAPIService.restaurantSearch(75063,20.0);

        //Assert
        assertEquals("The size should be 50", expected, actual.size());

        //Terminate



    }
}
