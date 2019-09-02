import React, { Component } from "react";

export default class ManagerNavigation extends Component {
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
  render() {
    return (
      <div className="card card-default">
        <div className="card-header">Gestionaire de Commande</div>
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
