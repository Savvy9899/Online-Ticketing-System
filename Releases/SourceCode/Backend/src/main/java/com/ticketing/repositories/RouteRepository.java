package com.ticketing.repositories;

import com.ticketing.model.Route;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RouteRepository extends MongoRepository<Route,Integer> {

    List<Route> getRouteByRouteId(String routeId);
}
