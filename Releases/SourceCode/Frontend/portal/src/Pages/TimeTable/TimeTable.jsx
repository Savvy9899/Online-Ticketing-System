import React, { Component } from "react";
import "./TimeTable.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import { GET_ALL_TIME_TABLE } from "../../Services/endpoints";

export default class TimeTable extends Component {
  state = {
    timeTable: [],
  };
  componentDidMount() {
    axios.get(GET_ALL_TIME_TABLE).then((res) => {
      this.setState({
        timeTable: res.data,
      });
    });
  }
  render() {
    const timeTable = this.state.timeTable;
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
          <div className="col-2">Date</div>
          <div className="col-2">Edit</div>
        </div>
        {timeTable.map((item) => {
          return (
            <div className="row text-center table-data mb-3">
              <div className="col-1 vertical-align">
                {item.timetableId ?? ""}
              </div>
              <div className="col-1 vertical-align">
                {item.routeDestinations ?? ""}
              </div>
              <div className="col-2 vertical-align">
                {item.startTime ?? ""} - {item.endTime ?? ""}
              </div>
              <div className="col-2 vertical-align">{item.from ?? ""}</div>
              <div className="col-2 vertical-align">{item.to ?? ""}</div>
              <div className="col-2 vertical-align">{item.date ?? ""}</div>
              <div className="col-2 vertical-align">
                <Link to="editTimeTable?{item}">
                  <button className="btn btn-info w-100 m-2 text-white d-none d-md-block">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                </Link>
                <Link to="deleteTimeTable?{item}">
                  <button className="btn btn-info w-100 m-2 text-white d-none d-md-block">
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </Link>
                <Link to="editTimeTable?{item}">
                  <button className="btn btn-info w-100 m-2 text-white d-sm-none d-block">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </Link>
                <Link to="deleteTimeTable?{item}">
                  <button className="btn btn-info w-100 m-2 text-white d-sm-none d-block">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
