import React, { Component } from "react";

export default class ChefNavigation extends Component {
  handleShowNewOrders = () => {
    this.props.navigation(true);
  };
  handleHideNewOrders = () => {
    this.props.navigation(false);
  };

  render() {
    return (
      <div class="card card-default">
        <div class="card-header">Chef cuisinie</div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">
              <button
                onClick={this.handleShowNewOrders}
                className="btn btn-primary"
              >
                List Des Nouvelles Commandes
              </button>
            </li>
            <li class="list-group-item">
              <button
                onClick={this.handleHideNewOrders}
                className="btn btn-primary"
              >
                List Des Commandes en Traitement
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
