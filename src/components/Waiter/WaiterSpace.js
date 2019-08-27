import React, { Component } from "react";
import WaiterNavigation from "./WaiterNavigation";
import OrdersToBeServedList from "./OrdersToBeServedList";
import OrdersServedList from "./OrdersServedList";
import CreateOrder from "../Orders/CreateOrder";
class WaiterSpace extends Component {
  state = {
    whatToShow: "toBeServed"
  };

  handleNavigation = panel => {
    this.setState({ whatToShow: panel });
  };
  render() {
    switch (this.state.whatToShow) {
      case "toBeServed":
        return (
          <div className="row">
            <div className="col col-md-4">
              <WaiterNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <OrdersToBeServedList />
            </div>
          </div>
        );
      case "served":
        return (
          <div className="row">
            <div className="col col-md-4">
              <WaiterNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <OrdersServedList />
            </div>
          </div>
        );
      case "new":
        return (
          <div className="row">
            <div className="col col-md-4">
              <WaiterNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <CreateOrder />
            </div>
          </div>
        );
      default:
        return (
          <div className="row">
            <div className="col col-md-4">
              <WaiterNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <OrdersToBeServedList />
            </div>
          </div>
        );
    }
  }
}
export default WaiterSpace;
