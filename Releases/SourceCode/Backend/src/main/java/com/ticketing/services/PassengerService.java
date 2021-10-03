package com.ticketing.services;

import com.ticketing.Dao.PassengerDao;
import com.ticketing.model.Passenger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface PassengerService {
    Passenger addPassenger(PassengerDao passengerDao);
}
