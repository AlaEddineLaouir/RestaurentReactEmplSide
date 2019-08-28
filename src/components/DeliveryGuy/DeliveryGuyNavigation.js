import React, { Component } from "react";

export default class DeliveryGuyNavigation extends Component {
  handleShow = () => {
    this.props.navigation(true);
  };
  handleHide = () => {
    this.props.navigation(false);
  };
  render() {
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Livreur</h3>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              <button onClick={this.handleShow} className="btn btn-primary">
                Commandes a livrer
              </button>
            </li>
            <li className="list-group-item">
              <button onClick={this.handleHide} className="btn btn-primary">
                Commandes En livraison
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
