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
        <div className="row">
          <div className="col col-md-4">
            <DeliveryGuyNavigation navigation={this.handleNavigation} />
          </div>
          <div className="col col-md-8">
            <OrdersToBeDelivered />
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col col-md-4">
            <DeliveryGuyNavigation navigation={this.handleNavigation} />
          </div>
          <div className="col col-md-8">
            <OrdersOnDelivery />
          </div>
        </div>
      );
    }
  }
}
export default DeliveryGuySpace;
