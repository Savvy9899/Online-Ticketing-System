package com.ticketing.repositories;
import com.ticketing.model.Timetable;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TimeTableRepository extends MongoRepository<Timetable, String> {
    List<Timetable> findTimetableByRouteDestinations(String route);
}