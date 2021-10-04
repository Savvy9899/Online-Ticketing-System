package com.ticketing.model;

import javax.persistence.Id;

public class LocalPassenger extends Passenger{

    @Id
    private String passportNo;

    public LocalPassenger() {

    }

    public String getPassportNo() {
        return passportNo;
    }

    public void setPassportNo(String passportNo) {
        this.passportNo = passportNo;
    }

    public LocalPassenger(String passportNo) {
        this.passportNo = passportNo;
    }

    public LocalPassenger(String passengerId, String name, String email, String phone, String passportNo) {
        super(passengerId, name, email, phone);
        this.passportNo = passportNo;
    }
}
