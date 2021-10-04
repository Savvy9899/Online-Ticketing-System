package com.ticketing.services.impl;

import com.ticketing.model.Route;
import com.ticketing.repositories.RouteRepository;
import com.ticketing.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RouteServiceImpl implements RouteService {

    @Autowired
    RouteRepository routeRepository;

    @Override
    public Route addRoute(Route route) {
        return routeRepository.save(route);
    }

    @Override
    public List<Route> getRouteById(String routeId) {
        return (List<Route>) routeRepository.getRouteByRouteId(routeId);
    }

    @Override
    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }
}
