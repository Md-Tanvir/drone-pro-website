import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{backgroundColor:'black'}} className=" text-white py-4">
      <div className="container">
        <div className="row gx-5 gy-5">
          {/* about us */}
          <div className="col-12 col-md-4">
            <h3>About Us</h3>
            <p>
            An unmanned aerial vehicle, commonly known as a drone, is an aircraft without any human pilot, crew or passengers on board. UAVs are a component of an unmanned aircraft system, which include additionally a ground-based controller and a system of communications with the UAV.
            </p>
          </div>
          {/* quick link */}
          <div className="col-12 col-md-4">
            <h3>Quick Links</h3>

            <NavLink to="/home">
              <li>Home</li>
            </NavLink>
            <NavLink to="/products">
              <li>Products</li>
            </NavLink>
           
          </div>
          {/* contact info */}
          <div className="col-12 col-md-4">
            <h3>Get Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> United state, Bangladesh
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> 10233, +88093532370100
            </p>
            <p>
              <i className="far fa-envelope"></i> info@dronepro.com ,
              dronepro@admin.com
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mb-0">
        Copyright © 2021. All Rights Reserved by dronepro.com
      </p>
    </div>
  );
};

export default Footer;
