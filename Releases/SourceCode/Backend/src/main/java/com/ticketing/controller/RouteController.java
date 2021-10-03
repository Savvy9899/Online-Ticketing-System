package com.ticketing.controller;

import com.ticketing.model.Route;
import com.ticketing.model.Ticket;
import com.ticketing.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/routes")
public class RouteController {

    @Autowired
    RouteService routeService;

    @PostMapping("/addRoute")
    public Route addTimetable(@RequestBody Route route){
        return routeService.addRoute(route);
    }
}
