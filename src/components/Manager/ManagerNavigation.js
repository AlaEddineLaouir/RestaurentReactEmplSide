import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/employeesActions";
class ManagerNavigation extends Component {
  handleShowMenu = () => {
    this.props.navigation("menu");
  };
  handleShowTables = () => {
    this.props.navigation("tables");
  };
  handleShowOnlineOrders = () => {
    this.props.navigation("onlineOrders");
  };
  handleShowNewOrder = () => {
    this.props.navigation("new");
  };
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-light"> Gestionaire de Commande</a>

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
              className="btn btn-outline-primary float-right"
              onClick={this.handleShowMenu}
            >
              Gerer Menu
            </button>
            <button
              className="btn btn-outline-primary float-right"
              onClick={this.handleShowTables}
            >
              List Des Tables
            </button>
            <button
              className="btn btn-outline-primary float-right"
              onClick={this.handleShowOnlineOrders}
            >
              Liste des commandes fiate online
            </button>
            <button
              className="btn btn-outline-primary float-right"
              onClick={this.handleShowNewOrder}
            >
              Ajouter une comande
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
)(ManagerNavigation);
