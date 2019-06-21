package com.restaurant.pojo;

import java.util.List;

public class Restaurant {

    private int rating;
    //private String expectedTime;
    private String price; //value in $ $$ $$$ or $$$$
    private String id;
    private String name;
    private List<Review> review;
    private String restURL;
    private double distance;
    private String imgURL;
    private String phoneNumber;
    private String direction;
    private boolean reservationNeeded;
    private String menu;
    private String address1;
    private String address2;
    private String city;
    private String alias;


    public Restaurant(int rating, String price, String id, String name, List<Review> review, String restURL,String imgURL, String phoneNumber, String direction, boolean reservationNeeded, String menu, String address1, String address2, String city, String alias ) {
        this.rating = rating;
        this.price = price;
        this.id = id;
        this.name = name;
        this.review = review; //cognizant reviews only
        this.restURL = restURL;
        this.imgURL = imgURL;
        this.phoneNumber = phoneNumber;
        this.direction = direction;
        this.reservationNeeded = reservationNeeded;
        this.menu = menu;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.alias = alias;
    }

    public Restaurant() {
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Review> getReview() {
        return review;
    }

    public void setReview(List<Review> review) {
        this.review = review;
    }

    public String getRestURL() {
        return restURL;
    }

    public void setRestURL(String restURL) {
        this.restURL = restURL;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public boolean isReservationNeeded() {
        return reservationNeeded;
    }

    public void setReservationNeeded(boolean reservationNeeded) {
        this.reservationNeeded = reservationNeeded;
    }

    public String getMenu() {
        return menu;
    }

    public void setMenu(String menu) {
        this.menu = menu;
    }

    public String getAddress1() { return address1; }

    public void setAddress1(String address1) { this.address1 = address1; }

    public String getAddress2() { return address2; }

    public void setAddress2(String address2) { this.address2 = address2; }

    public String getCity() { return city; }

    public void setCity(String city) { this.city = city; }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }
}
