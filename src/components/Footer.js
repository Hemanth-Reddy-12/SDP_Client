import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate("");
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row ">
          <div className="col">
            <h2>ETS</h2>
            <h4>Events Details</h4>
            <ui className="list-unstyled">
              <li>
                <Link
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    navigate("/Events");
                  }}
                >
                  Events
                </Link>
              </li>
            </ui>
          </div>

          <div className="col">
            <h2>Events</h2>
            <ui className="list-unstyled">
              <li
                onClick={() => {
                  navigate("/Wedding");
                }}
              >
                wedding
              </li>
              <li
                onClick={() => {
                  navigate("/Dj");
                }}
              >
                DJ
              </li>
              <li
                onClick={() => {
                  navigate("/Photoshoot");
                }}
              >
                PhotoShoot
              </li>
              <li
                onClick={() => {
                  navigate("/Transport");
                }}
              >
                Transport
              </li>
            </ui>
          </div>

          <div className="col">
            <h2>Contact details</h2>
            <ui className="list-unstyled">
              <li>Prakash Reddy</li>
              <li>Hemanth Reddy</li>
              <li>Tarun Reddy</li>
            </ui>
          </div>
        </div>

        <hr />

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
