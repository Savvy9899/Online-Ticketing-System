package com.ticketing.repositories;

import com.ticketing.model.QRCode;
import com.ticketing.model.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TicketRepository extends MongoRepository<Ticket,Integer> {

//    @Query("select new package.DeadlineType(a.id, a.code) from ABDeadlineType a ")
   Ticket getTicketByUserId(String id);
}
