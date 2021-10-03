package com.ticketing.services.impl;

import com.ticketing.model.Timetable;
import com.ticketing.repositories.TimeTableRepository;
import com.ticketing.services.TimeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TimeTableServiceImpl implements TimeTableService {

    @Autowired
    private TimeTableRepository timeTableRepository;

    @Override
    public Timetable addTimetable(Timetable timetable) {
        return timeTableRepository.save(timetable);
    }

    @Override
    public List<Timetable> getAllTimetables() {
        return timeTableRepository.findAll();
    }

    public  List<Timetable> getTimetablesByRoute(String route){
        return (List<Timetable>) timeTableRepository.findTimetableByRouteDestinations(route);
    }

}
