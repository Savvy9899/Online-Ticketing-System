package com.ticketing.repositories;

import com.ticketing.model.Route;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RouteRepository extends MongoRepository<Route,Integer> {
}
