import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import {
  GET_ALL_MAIN_ROUTE,
  GET_ALL_SUB_ROUTE,
} from "../../Services/endpoints";
export default class Routes extends Component {
  state = {
    subRoutes: [],
    mainRoutes: [],
  };
  componentDidMount() {
    axios.get(GET_ALL_MAIN_ROUTE).then((res) => {
      this.setState({
        mainRoutes: res.data,
      });
    });

    axios.get(GET_ALL_SUB_ROUTE).then((res) => {
      this.setState({
        subRoutes: res.data,
      });
    });
  }
  render() {
    const mainRoutes = this.state.mainRoutes;
    const subRoutes = this.state.subRoutes;
    console.log(mainRoutes);

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

        {mainRoutes.map((item) => {
          console.log(mainRoutes);
          return (
            <div className="row">
              <div className="col-3 vertical-align">{item.routeId ?? ""}</div>
              <div className="col-3 vertical-align">{item.routeName ?? ""}</div>
              <div className="col-3 vertical-align">
                {item.routePrice ?? ""}
              </div>
              <div className="col-3">
                {subRoutes.map((subItem) => {
                  if (item.routeId == subItem.routeId) {
                    // subItem.routeDestinations.map((route) => {
                    //   return <div>{subItem.routeDestinations}</div>;
                    // });
                    return <div>{subItem.routeDestinations+""}</div>;
                    // return <div>{subItem.routeDestinations[1]}</div>;
                    // let arr=[];
                    // for (let i = 0; i < subItem.routeDestinations.length; i++) {
                    //   const element = subItem.routeDestinations[i];
                    //   arr = arr + <div>{element}</div>;
                    // }
                    // return arr;
                  }
                  // return <div>Kandy</div>;
                })}
              </div>
              <hr className="mt-2" />
            </div>
          );
        })}
      </div>
    );
  }
}
