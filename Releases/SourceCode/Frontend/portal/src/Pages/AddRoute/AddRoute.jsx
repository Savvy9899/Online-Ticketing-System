import React, { Component } from "react";
import "./AddRoute.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AddRoute extends Component {
  render() {
    return (
      <div className="container mb-5">
        <h2 className="text-center m-5">Add Route</h2>
        <div className="col-md-6 col-sm-12 center-align mt-5">
          <form>
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
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Route Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
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
                Price
              </label>
              <input
                type="number"
                className="form-control"
                aria-describedby="emailHelp"
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
