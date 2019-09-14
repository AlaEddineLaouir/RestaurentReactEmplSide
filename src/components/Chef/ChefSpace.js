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
        <div>
          <ChefNavigation navigation={this.handleNavigation} />
          <div className="row">
            <div className="col">
              <EditOrder order={this.state.order} />
            </div>
          </div>
        </div>
      );
    } else {
      if (this.state.showNewOrders) {
        return (
          <div>
            <ChefNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <OrdersToPrepareList showEdit={this.handleShowEdit} />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <ChefNavigation navigation={this.handleNavigation} />
            <div className="row">
              <div className="col">
                <OrdersPreparedList showEdit={this.handleShowEdit} />
              </div>
            </div>
          </div>
        );
      }
    }
  }
}
