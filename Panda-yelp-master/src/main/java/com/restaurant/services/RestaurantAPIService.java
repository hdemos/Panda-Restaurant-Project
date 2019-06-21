package com.restaurant.services;

import com.restaurant.pojo.Restaurant;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;


@Service
public class RestaurantAPIService {
    static final String API_HOST = "https://api.yelp.com";
    static final String DEFAULT_TERM = "lunch";
    private static final String DEFAULT_LOCATION = "75063";
    private static final int SEARCH_LIMIT = 50; //make this larger later
    private static final String SEARCH_PATH = "/v3/businesses/search";
    private static final String BUSINESS_PATH = "/v3/business";

//     this variable is added to our path to get the direction of a specific business
//    private map = "map";

    /*
     * Update OAuth credentials below from the Yelp Developers API site:
     * http://www.yelp.com/developers/getting_started/api_access
     */
    private static final String CONSUMER_KEY = "placeholder";
    private static final String ZIPCODE_KEY = "B7sozC8g3AlvqdAIjoMOwap7tiOFb20CeaZMjgxbTW2dMEQp9uvALKLeHesFFfGy";

    OkHttpClient client = new OkHttpClient();

    public List<Restaurant> restaurantSearch(Integer location,Double dis){
        long disInt = Math.round(dis*1609.344); //convert miles to meters

        List<Restaurant> restaurants = new ArrayList<>();
        JSONObject resLocation;


        if(!zipcodeVerification(location))
            return restaurants;

        Request request = new Request.Builder()
                .url(API_HOST+SEARCH_PATH+"?term="+DEFAULT_TERM+"&location="+location+"&limit="+SEARCH_LIMIT+"&radius="+disInt)
                .get()
                .addHeader("Authorization", "Bearer "+CONSUMER_KEY)
                .build();

        try {
            Response response = client.newCall(request).execute();
            JSONObject js=new JSONObject(response.body().string());
            JSONArray jsArr = (JSONArray)js.get("businesses");


            for(int i =0 ; i < jsArr.length(); i++){
                Restaurant restaurant = new Restaurant();
                JSONObject jsObj= (JSONObject)jsArr.get(i);

                restaurant.setDistance(jsObj.getDouble("distance"));
                restaurant.setName(jsObj.getString("name"));
                restaurant.setRestURL(jsObj.getString("url"));
                restaurant.setId(jsObj.getString("id"));
                restaurant.setImgURL(jsObj.getString("image_url"));
                restaurant.setPhoneNumber(jsObj.getString("display_phone"));
                restaurant.setAlias(jsObj.getString("alias"));
                resLocation =  jsObj.getJSONObject("location");

                restaurant.setAddress1(resLocation.get("address1").toString());
                restaurant.setAddress2(resLocation.get("address2").toString());
                restaurant.setCity(resLocation.get("city").toString());

                JSONArray jsArrTransaction = (JSONArray)jsObj.get("transactions");
                restaurant.setReservationNeeded(false);
                for (int j =0; j < jsArrTransaction.length(); j++){
                    if(jsArrTransaction.get(j).toString().equals("restaurant_reservation") ){
                        restaurant.setReservationNeeded(true);
                    }

                }

            restaurants.add(restaurant);
            }

        }catch (Exception e){
            e.printStackTrace();
        }

        return restaurants;
    }


    public boolean zipcodeVerification(Integer location){
        String zipcodeAPI = "https://www.zipcodeapi.com/rest/";

        Request request = new Request.Builder()
                .url(zipcodeAPI+ZIPCODE_KEY+"/info.json/"+location+"/degrees")
                .get()
                .build();
        try {
            Response response = client.newCall(request).execute();
           return response.isSuccessful();
        } catch(Exception e){

        }
        return false;

    }




}
