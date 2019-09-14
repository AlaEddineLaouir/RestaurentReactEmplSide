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
          <div className="">
            <WaiterNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col ">
                <OrdersToBeServedList />
              </div>
            </div>
          </div>
        );
      case "served":
        return (
          <div className="">
            <WaiterNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <OrdersServedList />
              </div>
            </div>
          </div>
        );
      case "new":
        return (
          <div className="">
            <WaiterNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <CreateOrder />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="">
            <WaiterNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <OrdersToBeServedList />
              </div>
            </div>
          </div>
        );
    }
  }
}
export default WaiterSpace;
