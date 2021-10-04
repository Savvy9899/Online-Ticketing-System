package com.ticketing.services;

import com.ticketing.model.Ticket;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface TicketService {

    Ticket addTicket(Ticket ticket);
}
