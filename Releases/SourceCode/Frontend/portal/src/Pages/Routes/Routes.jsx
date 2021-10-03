import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class Routes extends Component {
  render() {
    return (
      <div className="container mt-5 ">
        <button className="btn btn-info p-2 ">
          <Link to="/AddRoute" className="text-white">
            <FontAwesomeIcon icon={faPlus} /> ADD ROUTE
          </Link>
        </button>
        <h2 className="text-center mb-5">All Route</h2>
        <div className="row">
          <div className="col-3">Route ID</div>
          <div className="col-3">Route Name</div>
          <div className="col-3">Price</div>
          <div className="col-3">Route Destinations</div>
          <hr className="mt-2" />
        </div>
        <div className="row">
          <div className="col-3 vertical-align">123</div>
          <div className="col-3 vertical-align">No: 164</div>
          <div className="col-3 vertical-align">Rs.250</div>
          <div className="col-3">
            <div>Kandy</div>
            <div>Kurunagala</div>
            <div>Malabe</div>
            <div>Battaramulla</div>
          </div>
          <hr className="mt-2" />
        </div>
      </div>
    );
  }
}
