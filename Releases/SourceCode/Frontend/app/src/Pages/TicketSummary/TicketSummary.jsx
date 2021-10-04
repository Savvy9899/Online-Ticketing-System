import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./TicketSummary.css";
export default class TicketSummary extends Component {
  render() {
    return (
      <div className="summary-outer">
        <div className="container ps-5 pe-5 ">
          <div>
            <div className="row pt-4">
              <div className="col-6">{/* <h2>Book a Ticket</h2> */}</div>
              <div className="col-6">
                <p className="text-end me-3">
                  <FontAwesomeIcon icon={faCoins} />
                  <span className="ms-1"> 1000</span>
                </p>
              </div>
            </div>
          </div>
          {/* <h2 className="p-3">Avaliable Buses</h2> */}
          <div className="row summary mt-5">
            <div className="col-2"></div>
            <div className="col-10 mt-4">
              <div className="row mt-4">
                <div className="col-6">Wellawatte</div>
                <div className="col-6">10:20am</div>
              </div>
              <div className="row mt-4">
                <div className="col-12 ps-2">
                  <h4> 100</h4> Galle-Colombo
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 ps-2">Ride 7 stops(25min)</div>
              </div>
              <div className="row mt-4">
                <div className="col-6">Pettah</div>
                <div className="col-6">10:50am</div>
              </div>
              <div className="row mt-4">
                {/* <div className="col-6">Amount</div> */}
                <div className="col-12 text-center">
                  <FontAwesomeIcon icon={faCoins} /> 250
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-center text-center">
            <button className="btn confirm-btn">Confirm Booking</button>
          </div>
        </div>
      </div>
    );
  }
}
