package com.ticketing.services;


import com.ticketing.model.Timetable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface TimeTableService {

    Timetable addTimetable(Timetable timetable);
    List<Timetable> getAllTimetables();
    List<Timetable> getTimetablesByRoute(String route);

}
