package com.ticketing.repositories;

import com.ticketing.model.LocalPassenger;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LocalPassengerRepository extends MongoRepository<LocalPassenger, String> {
}
