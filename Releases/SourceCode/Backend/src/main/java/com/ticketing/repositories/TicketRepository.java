package com.ticketing.repositories;

import com.ticketing.model.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TicketRepository extends MongoRepository<Ticket,Integer> {
}
