package com.ticketing.controller;
import com.ticketing.model.Ticket;
import com.ticketing.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/ticket")
public class TicketController {

    @Autowired
    TicketService ticketService;

    @PostMapping("/addTicket")
    public Ticket addTimetable(@RequestBody Ticket ticket){
        return ticketService.addTicket(ticket);
    }

}
