import React, { Component } from "react";
import "./AddTimeTable.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import axios from "axios";
import { ADD_TIME_TABLE } from "../../Services/endpoints";

export default class AddTimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timetableId: "",
      routeDestinations: "",
      from: "",
      to: "",
      startTime: "",
      endTime: "",
      credit: 0,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Data to send", this.state);
    // debugger;
    const res = axios.post(ADD_TIME_TABLE, this.state).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!",
      }).then(() => {
        window.location = "/timeTable";
      });
    });
  };
  render() {
    return (
      <div className="container mb-5">
        <h2 className="text-center m-5">Add Time Table</h2>
        <div className="col-md-6 col-sm-12 center-align mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Time Table Code
              </label>
              <input
                type="text"
                className="form-control"
                name="timetableId"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Route
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={this.handleChange}
                name="routeDestinations"
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
                onChange={this.handleChange}
                name="from"
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
                onChange={this.handleChange}
                name="to"
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
                Select Start Time
              </label>
              <input
                type="time"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
                name="startTime"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Select End Time
              </label>
              <input
                type="time"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
                name="endTime"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Enter Credit
              </label>
              <input
                type="number"
                className="form-control"
                onChange={this.handleChange}
                name="credit"
              />
            </div>
            <button type="submit" className="btn btn-info p-2 text-white">
              {/* <Link to="/timeTable/addTimeTable"></Link> */}
              <FontAwesomeIcon icon={faPlus} /> ADD TIME TABLE
            </button>
          </form>
        </div>
      </div>
    );
  }
}
