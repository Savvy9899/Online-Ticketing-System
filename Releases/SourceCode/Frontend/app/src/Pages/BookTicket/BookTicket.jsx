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
            <div className="col-6">{/* <h2>Book a Ticket</h2> */}</div>
            <div className="col-6">
              <p className="text-end me-3">
                <FontAwesomeIcon icon={faCoins} />
                <span className="ms-1"> 1000</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-center m-5">Book a Ticket</h2>
        <div className="col-md-6 col-sm-12 center-align mt-5">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Route
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                From
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                From
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Time
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <button type="submit" className="btn btn-info p-2 text-white">
              {/* <Link to="/timeTable/addTimeTable"></Link> */}
              Check Availability
            </button>
          </form>
        </div>
      </div>
    );
  }
}
