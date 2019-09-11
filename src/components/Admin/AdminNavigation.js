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
      <div className="card card-default">
        <div className="card-header">
          Adminstrateur
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
              <button onClick={this.handleHide} className="btn btn-primary">
                Ajouter Employee
              </button>
            </li>
            <li className="list-group-item">
              <button onClick={this.handleShow} className="btn btn-primary">
                List Employees
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
)(AdminNavigation);
