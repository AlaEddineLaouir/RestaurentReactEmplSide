import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/employeesActions";
class DeliveryGuyNavigation extends Component {
  handleShow = () => {
    this.props.navigation(true);
  };
  handleHide = () => {
    this.props.navigation(false);
  };
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">
            Livreur
            <button
              className="btn btn-danger float-right"
              onClick={this.handleLogout}
            >
              Quitter
            </button>
          </h3>
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
const mapStateToProp = state => ({});
export default connect(
  mapStateToProp,
  { logout }
)(DeliveryGuyNavigation);
