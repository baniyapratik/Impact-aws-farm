import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import '../../device-mockups/device-mockups.css';
import demoScreen1 from '../../testing_image.png';
import * as routes from './../../../../authentication/constants/routes';

export const HeroComponent = (props) => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Welcome to an Automated Mobile Testing Platform that is
                Affordable, Efficient, and Easy to Use.
              </h1>
              <Button
                variant="dark"
                onClick={() => {
                  props.history.push(routes.SIGN_UP);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait black">
                <div className="device">
                  <div className="screen">
                    <img src={demoScreen1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
