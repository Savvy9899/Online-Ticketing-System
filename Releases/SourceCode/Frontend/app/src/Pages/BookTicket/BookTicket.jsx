import React, { Component } from "react";
import "./BookTicket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
export default class BookTicket extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div className="row mt-4 ">
            <div className="col-6">
              <h2>Book a Ticket</h2>
            </div>
            <div className="col-6">
              <p className="text-end me-3">
                <FontAwesomeIcon icon={faCoins} />
                <span className="ms-1"> 1000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
