import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getEmployeeList,
  deleteEmployee
} from "../../actions/employeesActions";
import EditEmployee from "./EditEmployee";

class EmployeeList extends Component {
  state = { showEdit: false };
  componentDidMount() {
    this.props.getEmployeeList();
  }

  handleEdit = employee => {
    this.setState({ employee, showEdit: true });
  };
  handleDelete = id => {
    this.props.deleteEmployee(id);
  };
  render() {
    if (this.state.showEdit) {
      return <EditEmployee employee={this.state.employee} />;
    } else {
      const { EmployeeList } = this.props;
      return (
        <div class="card">
          <div class="card-header">Liste Des Employee</div>
          <div class="card-body">
            <table class="table table-hover">
              <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {EmployeeList.map(employee => (
                  <Employee
                    key={employee.id}
                    employee={employee}
                    delete={this.handleDelete}
                    edit={this.handleEdit}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

class Employee extends Component {
  handleDelete = () => {
    const { id } = this.props.employee;
    this.props.delete(id);
  };
  handleEdit = () => {
    this.props.edit(this.props.employee);
  };
  render() {
    const { name, email, phone, role } = this.props.employee;
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{role}</td>
        <td>
          <button class="btn btn-primary btn-sm" onClick={this.handleEdit}>
            Edit
          </button>
        </td>
        <td>
          <form>
            <button
              class="btn btn-secondary btn-sm"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </form>
        </td>
      </tr>
    );
  }
}

EmployeeList.propTypes = {
  EmployeeList: PropTypes.array.isRequired,
  getEmployeeList: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  EmployeeList: state.employeeAccount.EmployeeList
});
export default connect(
  mapStateToProp,
  { getEmployeeList, deleteEmployee }
)(EmployeeList);
