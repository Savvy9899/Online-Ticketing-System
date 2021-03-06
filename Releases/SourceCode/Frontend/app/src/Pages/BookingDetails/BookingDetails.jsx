import React, { Component } from "react";
import { QRCode } from "react-qr-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./BookingDetails.css";
export default class BookingDetails extends Component {
  render() {
    return (
      <div className="container">
         <div>
          <div className="row mt-4 ">
            <div className="col-6">{/* <h2>Book a Ticket</h2> */}</div>
            <div className="col-6">
              <p className="text-end me-3">
                <FontAwesomeIcon icon={faCoins} />
                <span className="ms-1"> 1000</span>
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-center m-3"> Booking Details</h2>
        <div className="bk-details text-center text-white mt-5">
          <div className="row">
            <div className="col-4">Time</div>
            <div className="col-4">Bus Number</div>
            <div className="col-4">Credit</div>
          </div>
          <div className="row mt-2">
            <div className="col-4">10:00am</div>
            <div className="col-4"> 100</div>
            <div className="col-4">250</div>
          </div>
        </div>
        <div className="bk-details text-center text-white mt-3">
          <div className="row">
            <div className="col-4">Passenger</div>
            <div className="col-4">Start</div>
            <div className="col-4">End</div>
          </div>
          <div className="row mt-2">
            <div className="col-4">Arosh</div>
            <div className="col-4"> Wellawatta</div>
            <div className="col-4">Pettah</div>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <QRCode
            level="Q"
            style={{ width: 220 }}
            value={JSON.stringify({
              id: 928328,
              name: "Jane Doe",
              insider: true,
            })}
          />
        </div>
      </div>
    );
  }
}
