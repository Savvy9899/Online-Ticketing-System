package com.ticketing.services;

import com.ticketing.model.Route;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface RouteService {
    Route addRoute(Route route);
}
