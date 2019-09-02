import React, { Component } from "react";
import ManagerNavigation from "./ManagerNavigation";
import OnlineOrders from "./OnlineOrders";
import ManageTables from "./ManageTables";
import ManageMenu from "./ManageMenu";
import CreateOrder from "../Orders/CreateOrder";

export default class ManagerSpace extends Component {
  state = {
    whatToShow: "onlineOrders"
  };
  handleNavigation = show => {
    this.setState({ whatToShow: show });
  };
  render() {
    switch (this.state.whatToShow) {
      case "new":
        return (
          <div className="row">
            <div className="col col-md-4">
              <ManagerNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <CreateOrder />
            </div>
          </div>
        );
      case "onlineOrders":
        return (
          <div className="row">
            <div className="col col-md-4">
              <ManagerNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <OnlineOrders />
            </div>
          </div>
        );
      case "tables":
        return (
          <div className="row">
            <div className="col col-md-4">
              <ManagerNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <ManageTables />
            </div>
          </div>
        );
      case "menu":
        return (
          <div className="row">
            <div className="col col-md-4">
              <ManagerNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <ManageMenu />
            </div>
          </div>
        );

      default:
        return (
          <div className="row">
            <div className="col col-md-4">
              <ManagerNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <OnlineOrders />
            </div>
          </div>
        );
    }
  }
}
