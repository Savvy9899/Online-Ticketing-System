import React, { Component } from "react";
import "./BookTicket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import { ADD_TICKET } from "../../Services/endponit";
export default class BookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "8",
      time: "",
      date: "",
      route: "",
      source: "",
      destination: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Data to send", this.state);
    // debugger;
    // const res = axios.post(ADD_TICKET, this.state).then(() => {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Insert Successful!!",
    //   }).then(() => {
    //     window.location = "/timeTable";
    //   });
    // });

    localStorage.setItem("ticket", JSON.stringify(this.state));
    window.location = "/avaliableBuses";
  };
  render() {
    return (
      <div className="container">
        <div>
          <div className="row mt-4">
            <div className="col-6">{/* <h2>Book a Ticket</h2> */}</div>
            <div className="col-6">
              <p className="text-end me-3">
                <FontAwesomeIcon icon={faCoins} />
                <span className="ms-1"> 1000</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-center m-3">Book a Ticket</h2>
        <div className="col-md-6 col-sm-12 center-align mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Route
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="route"
                onChange={this.handleChange}
              >
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
              <select
                class="form-select"
                aria-label="Default select example"
                name="source"
                onChange={this.handleChange}
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                To
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="destination"
                onChange={this.handleChange}
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Date
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="date"
                onChange={this.handleChange}
              >
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
              <select
                class="form-select"
                aria-label="Default select example"
                name="time"
                onChange={this.handleChange}
              >
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
