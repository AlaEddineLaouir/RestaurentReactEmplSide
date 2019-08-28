import React, { Component } from "react";
import OrdersToPrepareList from "./OrdersToPrepareList";
import OrdersPreparedList from "./OrdersPreparedList";
import ChefNavigation from "./ChefNavigation";
export default class ChefSpace extends Component {
  state = {
    showNewOrders: true
  };

  handleNavigation = show => {
    this.setState({ showNewOrders: show });
  };

  render() {
    if (this.state.showNewOrders) {
      return (
        <div className="row">
          <div className="col col-md-4">
            <ChefNavigation navigation={this.handleNavigation} />
          </div>
          <div className="col col-md-8">
            <OrdersToPrepareList />
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col col-md-4">
            <ChefNavigation navigation={this.handleNavigation} />
          </div>
          <div className="col col-md-8">
            <OrdersPreparedList />
          </div>
        </div>
      );
    }
  }
}
