import React, { Component } from "react";
import "./TimeTable.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class TimeTable extends Component {
  render() {
    return (
      <div className="container mt-5">
        <button className="btn btn-info p-2 ">
          <Link to="/timeTable/addTimeTable" className="text-white">
            <FontAwesomeIcon icon={faPlus} /> ADD TIME TABLE
          </Link>
        </button>
        <h2 className="text-center m-3"> Time Table</h2>
        <div className="row text-center table-hedaer mb-4">
          <div className="col-1">Time Table Code</div>
          <div className="col-1">Route</div>
          <div className="col-2">Start Time</div>
          <div className="col-2">From</div>
          <div className="col-2">To</div>
          <div className="col-2">Bus No</div>
          <div className="col-2">Edit</div>
        </div>
        <div className="row text-center table-data mb-3">
          <div className="col-1 vertical-align">T001</div>
          <div className="col-1 vertical-align">R001</div>
          <div className="col-2 vertical-align">10:00am- 10:20am</div>
          <div className="col-2 vertical-align">Kandy</div>
          <div className="col-2 vertical-align">Colombo</div>
          <div className="col-2 vertical-align">NA-2020</div>
          <div className="col-2 vertical-align">
            <button className="btn btn-info w-100 m-2 text-white d-none d-md-block">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>

            <button className="btn btn-info w-100 m-2 text-white d-none d-md-block">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
            <button className="btn btn-info w-100 m-2 text-white d-sm-none d-block">
              <FontAwesomeIcon icon={faEdit} />
            </button>

            <button className="btn btn-info w-100 m-2 text-white d-sm-none d-block">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
