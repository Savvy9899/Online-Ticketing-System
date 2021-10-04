package com.ticketing.controller;

import com.ticketing.model.MainRoutes;
import com.ticketing.model.Route;
import com.ticketing.model.Ticket;
import com.ticketing.services.MainRoutesService;
import com.ticketing.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/routes")
public class RouteController {

    @Autowired
    RouteService routeService;

    @Autowired
    MainRoutesService mainRoutesService;

    @PostMapping("/addRoute")
    public Route addTimetable(@RequestBody Route route){
        return routeService.addRoute(route);
    }

    @GetMapping("/getRoutesById")
    public List<Route> getTimetablesById(@RequestParam(value = "routeId") String routeId){
        return routeService.getRouteById(routeId);
    }

    @PostMapping("/addMainRoutes")
    public MainRoutes addMainRoutes(@RequestBody MainRoutes mainRoutes){
        return mainRoutesService.addMainRoutes(mainRoutes);
    }

    @GetMapping("/getMainRoutesById")
    public MainRoutes getMainRoutesById(@RequestParam(value = "routeId") String routeId){
        return mainRoutesService.getMainRoute(routeId);
    }

    @GetMapping("/getAllMainRoutes")
    public List<MainRoutes> getAllMainRoutes(){
        return mainRoutesService.getAllMainRoutes();
    }

    @GetMapping("/getAllRoutes")
    public List<Route> getAllRoutes(){
        return routeService.getAllRoutes();
    }


}
