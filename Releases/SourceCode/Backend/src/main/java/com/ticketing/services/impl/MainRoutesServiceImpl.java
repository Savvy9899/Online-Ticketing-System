package com.ticketing.services.impl;

import com.ticketing.model.MainRoutes;
import com.ticketing.repositories.MainRoutesRepository;
import com.ticketing.services.MainRoutesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MainRoutesServiceImpl implements MainRoutesService {

    @Autowired
    MainRoutesRepository mainRoutesRepository;

    @Override
    public MainRoutes addMainRoutes(MainRoutes mainRoutes) {
        return mainRoutesRepository.save(mainRoutes);
    }

    @Override
    public MainRoutes getMainRoute(String routeId) {
        return mainRoutesRepository.getMainRoutesByRouteId(routeId);
    }

    @Override
    public List<MainRoutes> getAllMainRoutes() {
        return mainRoutesRepository.findAll();
    }
}

