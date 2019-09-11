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
      <div className="card card-default">
        <div className="card-header">
          Gestionaire de Commande
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
              <button className="btn btn-primary" onClick={this.handleShowMenu}>
                Gerer Menu
              </button>
            </li>

            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={this.handleShowTables}
              >
                List Des Tables
              </button>
            </li>

            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={this.handleShowOnlineOrders}
              >
                Liste des commandes fiate online
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={this.handleShowNewOrder}
              >
                Ajouter une comande
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
)(ManagerNavigation);
