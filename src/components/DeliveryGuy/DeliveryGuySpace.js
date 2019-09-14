import React, { Component } from "react";
import DeliveryGuyNavigation from "./DeliveryGuyNavigation";
import OrdersToBeDelivered from "./OrdersToBeDelivered";
import OrdersOnDelivery from "./OrdersOnDelivery";

class DeliveryGuySpace extends Component {
  state = {
    showToBeDelivered: true
  };

  handleNavigation = show => {
    this.setState({ showToBeDelivered: show });
  };

  render() {
    if (this.state.showToBeDelivered) {
      return (
        <div className="">
          <DeliveryGuyNavigation navigation={this.handleNavigation} />
          <div className="row">
            <div className="col">
              <OrdersToBeDelivered />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="">
          <DeliveryGuyNavigation navigation={this.handleNavigation} />
          <div className="row">
            <div className="col ">
              <OrdersOnDelivery />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default DeliveryGuySpace;
