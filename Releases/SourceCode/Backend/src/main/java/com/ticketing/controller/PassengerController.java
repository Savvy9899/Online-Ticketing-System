package com.ticketing.controller;

import com.ticketing.Dao.PassengerDao;
import com.ticketing.model.Passenger;
import com.ticketing.model.Ticket;
import com.ticketing.services.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class PassengerController {

    @Autowired
    PassengerService passengerService;

    @PostMapping("/addUser")
    public Passenger addPassenger(@RequestBody PassengerDao passenger){
        return passengerService.addPassenger(passenger);
    }
}
