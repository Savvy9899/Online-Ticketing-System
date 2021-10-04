import React, { Component } from "react";
import "./AddRoute.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import axios from "axios";
import { ADD_MAIN_ROUTE, ADD_SUB_ROUTE } from "../../Services/endpoints";

export default class AddRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeId: "",
      routeName: "",
      routePrice: 0,
      routeDestinations: [],
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Data to send", this.state);
    // debugger;
    const MainRoute = {
      routeId: this.state.routeId,
      routeName: this.state.routeName,
      routePrice: this.state.routePrice,
    };

    const SubRoute = {
      routeId: this.state.routeId,
      routeDestinations: this.state.routeDestinations,
    };
    axios
      .post(ADD_MAIN_ROUTE, MainRoute)
      .then(() => {
        axios.post(ADD_SUB_ROUTE, SubRoute);
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Insert Successful!!",
        }).then(() => {
          window.location = "/routes";
        });
      });
  };
  render() {
    return (
      <div className="container mb-5">
        <h2 className="text-center m-5">Add Route</h2>
        <div className="col-md-6 col-sm-12 center-align mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Route ID
              </label>
              <input
                type="text"
                className="form-control"
                name="routeId"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Route Name
              </label>
              <input
                type="text"
                className="form-control"
                name="routeName"
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
                name="timetableId"
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
                Price
              </label>
              <input
                type="number"
                className="form-control"
                name="routePrice"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-info p-2 text-white">
              {/* <Link to="/timeTable/addTimeTable"></Link> */}
              <FontAwesomeIcon icon={faPlus} /> ADD Route
            </button>
          </form>
        </div>
      </div>
    );
  }
}
