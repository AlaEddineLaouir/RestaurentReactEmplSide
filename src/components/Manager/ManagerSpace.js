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
          <div className="">
            <ManagerNavigation navigation={this.handleNavigation} />
            <div className="row ">
              <div className="col">
                <CreateOrder />
              </div>
            </div>
          </div>
        );
      case "onlineOrders":
        return (
          <div>
            <ManagerNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <OnlineOrders />
              </div>
            </div>
          </div>
        );
      case "tables":
        return (
          <div>
            <ManagerNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <ManageTables />
              </div>
            </div>
          </div>
        );
      case "menu":
        return (
          <div className="">
            <ManagerNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <ManageMenu />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="">
            <ManagerNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <OnlineOrders />
              </div>
            </div>
          </div>
        );
    }
  }
}
