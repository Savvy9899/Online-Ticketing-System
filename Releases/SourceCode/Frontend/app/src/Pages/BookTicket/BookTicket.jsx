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
                <option selected>-SELECT-</option>
                <option value="150">150</option>
                <option value="190">190</option>
                <option value="200">200</option>
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
                <option selected>-SELECT-</option>
                <option value="Malabe ">Malabe</option>
                <option value="Kaduwela">Kaduwela</option>
                <option value="Kandy">Kandy</option>
                <option value="Panadura">Panadura</option>
                <option value="Delgoda">Delgoda</option>
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
                <option selected>-SELECT-</option>
                <option value="Malabe ">Malabe</option>
                <option value="Kaduwela">Kaduwela</option>
                <option value="Kandy">Kandy</option>
                <option value="Panadura">Panadura</option>
                <option value="Delgoda">Delgoda</option>
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
                <option selected>-SELECT-</option>
                <option value="2021-04-25">2021-04-25</option>
                <option value="2021-08-24">2021-04-24</option>
                <option value="2021-07-10">2021-04-10</option>
                <option value="2021-03-18">2021-04-18</option>
                <option value="2021-01-30">2021-04-30</option>
                <option value="2021-11-06">2021-04-06</option>
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
                <option selected>-SELECT-</option>
                <option value="10.00">10.00</option>
                <option value="11.00">11.00</option>
                <option value="12.00">12.00</option>
                <option value="13.00">13.00</option>
                <option value="14.00">14.00</option>
                <option value="15.00">15.00</option>
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
