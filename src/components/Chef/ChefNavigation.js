import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/employeesActions";
class ChefNavigation extends Component {
  handleShowNewOrders = () => {
    this.props.navigation(true);
  };
  handleHideNewOrders = () => {
    this.props.navigation(false);
  };
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-light">Chef </a>

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
              onClick={this.handleShowNewOrders}
              className="btn btn-outline-primary"
            >
              List Des Nouvelles Commandes
            </button>
            <button
              onClick={this.handleHideNewOrders}
              className="btn btn-outline-primary"
            >
              List Des Commandes en Traitement
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
)(ChefNavigation);
