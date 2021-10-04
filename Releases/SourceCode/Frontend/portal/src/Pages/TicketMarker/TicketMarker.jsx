import React, { Component } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TicketMarker extends Component {
  render() {
    return (
      <div className="container mb-5">
        <h2 className="text-center m-5">Ticket Marker</h2>
        <div className="col-md-6 col-sm-12 center-align mt-5">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                User ID
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Ticket ID
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Route ID
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" className="btn btn-info p-2 text-white">
              {/* <Link to="/timeTable/addTimeTable"></Link> */}
              <FontAwesomeIcon icon={faExclamationTriangle} /> Mark as Invalid
            </button>
          </form>
        </div>
      </div>
    );
  }
}
