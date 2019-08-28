import React, { Component } from "react";
import OrdersServedList from "../Waiter/OrdersServedList";

class CachierSpace extends Component {
  render() {
    return (
      <div className="card card-default">
        <div className="card-header">Caissier</div>
        <div className="card-body">
          <OrdersServedList />
        </div>
      </div>
    );
  }
}
export default CachierSpace;
