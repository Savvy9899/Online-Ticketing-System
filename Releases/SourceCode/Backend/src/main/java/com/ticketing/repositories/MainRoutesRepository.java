package com.ticketing.repositories;

import com.ticketing.model.MainRoutes;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MainRoutesRepository extends MongoRepository<MainRoutes, String> {
    MainRoutes getMainRoutesByRouteId(String routeId);
}
