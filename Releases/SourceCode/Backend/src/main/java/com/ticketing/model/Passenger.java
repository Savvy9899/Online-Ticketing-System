package com.ticketing.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class Passenger {

    private String passengerId;
    private String name;
    private String email;
    private String phone;

    public Passenger() {
    }

    public Passenger(String passengerId, String name, String email, String phone) {
        this.passengerId = passengerId;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public String getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(String passengerId) {
        this.passengerId = passengerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
