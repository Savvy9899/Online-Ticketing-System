package com.ticketing.services;

import com.ticketing.model.Route;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface RouteService {
    Route addRoute(Route route);
    List<Route> getRouteById(String routeId);
    List<Route> getAllRoutes();
}
