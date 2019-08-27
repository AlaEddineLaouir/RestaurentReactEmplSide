import React, { Component } from "react";

export default class WaiterNavigation extends Component {
  handleShowCreateOrder = () => {
    this.props.navigation("new");
  };
  handleShowOrdersToBeServed = () => {
    this.props.navigation("toBeServed");
  };
  handleShowOrdersServed = () => {
    this.props.navigation("served");
  };

  render() {
    return (
      <div className="card card-default">
        <div className="card-header">Serveur</div>
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
