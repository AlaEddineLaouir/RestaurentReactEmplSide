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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-light">Serveur </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#managerNav"
          aria-controls="managerNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="managerNav">
          <ul className="navbar-nav ml-auto">
            <button
              className="btn btn-outline-primary"
              onClick={this.handleShowCreateOrder}
            >
              Ajouter Commande
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={this.handleShowOrdersToBeServed}
            >
              List Commnade prete a servir
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={this.handleShowOrdersServed}
            >
              List Commnade servis a table
            </button>
            <button
              className="btn btn-danger float-right"
              onClick={this.handleLogout}
            >
              Quitter
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProp = state => ({});
export default connect(
  mapStateToProp,
  { logout }
)(WaiterNavigation);
