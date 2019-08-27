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
        <div className="row">
          <div className="col col-md-4">
            <AdminNavigation navigation={this.handleNavigation} />
          </div>
          <div className="col col-md-8">
            <EmployeeList />
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col col-md-4 ">
            <AdminNavigation navigation={this.handleNavigation} />
          </div>
          <div className="col col-md-8">
            <AddEmployee />
          </div>
        </div>
      );
    }
  }
}
