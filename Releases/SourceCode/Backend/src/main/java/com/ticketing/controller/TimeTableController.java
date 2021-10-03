package com.ticketing.controller;

import com.ticketing.model.Timetable;
import com.ticketing.services.TimeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/timetable")
public class TimeTableController {

    @Autowired
    TimeTableService timeTableService;

    @PostMapping("/addTimetable")
    public Timetable addTimetable(@RequestBody Timetable timetable){
        return timeTableService.addTimetable(timetable);
    }

    @GetMapping("/getAllTimetables")
    public List<Timetable> getTimetables() {
        return timeTableService.getAllTimetables();
    }


    @GetMapping("/getTimetablesByRouter/")
    public List<Timetable> getTimelinesByRoute(@RequestParam(value = "routeId") String routeId) {
        System.out.println(routeId);
        return timeTableService.getTimetablesByRoute(routeId);
    }
}
