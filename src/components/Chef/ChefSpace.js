import React, { Component } from "react";
import OrdersToPrepareList from "./OrdersToPrepareList";
import OrdersPreparedList from "./OrdersPreparedList";
import ChefNavigation from "./ChefNavigation";

import EditOrder from "../Orders/EditOrder";

export default class ChefSpace extends Component {
  state = {
    showNewOrders: true,
    showEdit: false
  };

  handleShowEdit = order => {
    this.setState({ order: order, showEdit: true });
  };

  handleNavigation = show => {
    this.setState({ showNewOrders: show, showEdit: false });
  };

  render() {
    if (this.state.showEdit) {
      return (
        <div className="row">
          <div className="col col-md-4">
            <ChefNavigation navigation={this.handleNavigation} />
          </div>
          <div className="col col-md-8">
            <EditOrder order={this.state.order} />
          </div>
        </div>
      );
    } else {
      if (this.state.showNewOrders) {
        return (
          <div className="row">
            <div className="col col-md-4">
              <ChefNavigation navigation={this.handleNavigation} />
            </div>
            <div className="col col-md-8">
              <OrdersToPrepareList showEdit={this.handleShowEdit} />
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
              <OrdersPreparedList showEdit={this.handleShowEdit} />
            </div>
          </div>
        );
      }
    }
  }
}
