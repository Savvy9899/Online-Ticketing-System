package com.ticketing.services;

import com.ticketing.model.MainRoutes;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface MainRoutesService {
    MainRoutes addMainRoutes(MainRoutes mainRoutes);
    MainRoutes getMainRoute(String routeId);
    List<MainRoutes> getAllMainRoutes();
}
