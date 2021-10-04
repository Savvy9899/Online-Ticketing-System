import React, { Component } from "react";
import "./AvaliableBuses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export default class AvaliableBuses extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="buses-outer">
        <div className="container">
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
          <h2 className="text-center p-3">Avaliable Buses</h2>
          <div className="buses text-center mt-4">
            <div className="row">
              <div className="col-6">Bus 100</div>
              <div className="col-6">10:20am - 10:25am</div>
            </div>
            <div className="row">
              <div className="col-6">Route</div>
              <div className="col-6">Galle - Colombo</div>
            </div>
            <div className="row">
              <div className="col-6">Amount</div>
              <div className="col-6">
                <FontAwesomeIcon icon={faCoins} /> 250
              </div>
            </div>
          </div>
          <div className="buses text-center mt-4">
            <div className="row">
              <div className="col-6">Bus 100</div>
              <div className="col-6">10:20am - 10:25am</div>
            </div>
            <div className="row">
              <div className="col-6">Route</div>
              <div className="col-6">Galle - Colombo</div>
            </div>
            <div className="row">
              <div className="col-6">Amount</div>
              <div className="col-6">
                <FontAwesomeIcon icon={faCoins} /> 250
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
