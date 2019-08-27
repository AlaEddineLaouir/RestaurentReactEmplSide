import React, { Component } from "react";

class AdminNavigation extends Component {
  handleShow = () => {
    this.props.navigation(true);
  };
  handleHide = () => {
    this.props.navigation(false);
  };
  render() {
    return (
      <div className="card card-default">
        <div className="card-header">Adminstrateur</div>
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
export default AdminNavigation;
