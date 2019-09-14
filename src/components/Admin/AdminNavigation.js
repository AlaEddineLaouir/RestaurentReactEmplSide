import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/employeesActions";
class AdminNavigation extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  handleShow = () => {
    this.props.navigation(true);
  };
  handleHide = () => {
    this.props.navigation(false);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-light">Adminstrateur </a>

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
              onClick={this.handleHide}
              className="btn btn-outline-primary"
            >
              Ajouter Employee
            </button>
            <button
              onClick={this.handleShow}
              className="btn btn-outline-primary"
            >
              List Employees
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
)(AdminNavigation);
