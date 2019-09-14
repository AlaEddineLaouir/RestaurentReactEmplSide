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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-light"> Livreur</a>

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
              onClick={this.handleShow}
              className="btn btn-outline-primary"
            >
              Commandes a livrer
            </button>
            <button
              onClick={this.handleHide}
              className="btn btn-outline-primary"
            >
              Commandes En livraison
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
)(DeliveryGuyNavigation);
