import React, { Component } from "react";
import OrdersServedList from "../Waiter/OrdersServedList";
import { connect } from "react-redux";
import { logout } from "../../actions/employeesActions";
class CachierSpace extends Component {
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div className="card card-default">
        <div className="card-header">
          Caissier
          <button
            className="btn btn-danger float-right"
            onClick={this.handleLogout}
          >
            Quitter
          </button>
        </div>
        <div className="card-body">
          <OrdersServedList />
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => ({});
export default connect(
  mapStateToProp,
  { logout }
)(CachierSpace);
