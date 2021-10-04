package com.ticketing.model;

import javax.persistence.Id;

public class ForeignPassenger extends Passenger{

    @Id
    private String nicNo;

    public ForeignPassenger() {

    }

    public String getNicNo() {
        return nicNo;
    }

    public void setNicNo(String nicNo) {
        this.nicNo = nicNo;
    }

    public ForeignPassenger(String nicNo) {
        this.nicNo = nicNo;
    }

    public ForeignPassenger(String passengerId, String name, String email, String phone, String nicNo) {
        super(passengerId, name, email, phone);
        this.nicNo = nicNo;
    }

}
