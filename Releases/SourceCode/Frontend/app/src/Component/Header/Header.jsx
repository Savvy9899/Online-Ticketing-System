import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <p className="companyName text-white">BuyTicket.lk</p>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/timeTable">
                    <a className="nav-link" aria-current="page" href="#">
                      <p>Time Table</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <p>Metrics</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <p>Routes</p>
                  </a>
                </li>
                <li className="nav-item justify-content-end">
                  <a className="nav-link" href="#">
                    <p> Log Out</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
