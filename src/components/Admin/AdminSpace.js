import React, { Component } from "react";
import AdminNavigation from "./AdminNavigation";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";
export default class AdminSpace extends Component {
  state = {
    showList: true
  };

  handleNavigation = boolean => {
    this.setState({ showList: boolean });
  };

  render() {
    if (this.state.showList) {
      return (
        <div>
          <AdminNavigation navigation={this.handleNavigation} />
          <div className="row">
            <div className="col">
              <EmployeeList />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <AdminNavigation navigation={this.handleNavigation} />
          <div className="row">
            <div className="col">
              <AddEmployee />
            </div>
          </div>
        </div>
      );
    }
  }
}
