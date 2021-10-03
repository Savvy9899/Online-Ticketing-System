package com.ticketing.repositories;

import com.ticketing.model.ForeignPassenger;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ForeignPassengerRepository extends MongoRepository<ForeignPassenger,String> {
}
