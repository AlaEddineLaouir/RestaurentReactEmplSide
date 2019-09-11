import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/employeesActions";
class WaiterNavigation extends Component {
  handleShowCreateOrder = () => {
    this.props.navigation("new");
  };
  handleShowOrdersToBeServed = () => {
    this.props.navigation("toBeServed");
  };
  handleShowOrdersServed = () => {
    this.props.navigation("served");
  };
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className="card card-default">
        <div className="card-header">
          Serveur
          <button
            className="btn btn-danger float-right"
            onClick={this.handleLogout}
          >
            Quitter
          </button>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={this.handleShowCreateOrder}
              >
                Ajouter Commande
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={this.handleShowOrdersToBeServed}
              >
                List Commnade prete a servir
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={this.handleShowOrdersServed}
              >
                List Commnade servis a table
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => ({});
export default connect(
  mapStateToProp,
  { logout }
)(WaiterNavigation);
