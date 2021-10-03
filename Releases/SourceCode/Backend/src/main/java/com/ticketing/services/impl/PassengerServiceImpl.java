package com.ticketing.services.impl;

import com.ticketing.Dao.PassengerDao;
import com.ticketing.model.ForeignPassenger;
import com.ticketing.model.LocalPassenger;
import com.ticketing.model.Passenger;
import com.ticketing.repositories.ForeignPassengerRepository;
import com.ticketing.repositories.LocalPassengerRepository;
import com.ticketing.services.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PassengerServiceImpl implements PassengerService {

    @Autowired
    ForeignPassengerRepository foreignPassengerRepository;
    LocalPassengerRepository localPassengerRepository;

    @Override
    public Passenger addPassenger(PassengerDao passengerDao) {

        String userType = passengerDao.getPassengerId().toString();

        if(((userType.charAt(userType.length() - 1)) == 'V') || ((userType.charAt(userType.length() - 1)) == 'X')){

            LocalPassenger passenger = new LocalPassenger();

            passenger.setPassengerId(passengerDao.getPassengerId());
            passenger.setName(passengerDao.getName());
            passenger.setEmail(passengerDao.getEmail());
            passenger.setPhone(passengerDao.getPhone());
            passenger.setPassportNo(passengerDao.getId());

            return localPassengerRepository.save(passenger);
        }else {

            ForeignPassenger passenger = new ForeignPassenger();

            passenger.setPassengerId(passengerDao.getPassengerId());
            passenger.setName(passengerDao.getName());
            passenger.setEmail(passengerDao.getEmail());
            passenger.setPhone(passengerDao.getPhone());
            passenger.setNicNo(passengerDao.getId());

            return foreignPassengerRepository.save(passenger);
        }


    }
}
