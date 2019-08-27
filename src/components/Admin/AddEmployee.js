import React, { Component } from "react";
import { connect } from "react-redux";

import { addEmployee } from "../../actions/employeesActions";

class AddEmployee extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddEmployee = e => {
    e.preventDefault();

    const { name, phone, email, role, password } = this.state;

    this.props.addEmployee({ name, phone, email, role, password });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Ajouter Employee</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone :</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                name="role"
                onChange={this.onChange}
              >
                <option value="1">Serveur</option>
                <option value="5">Livreur</option>
                <option value="4">Caissier</option>
                <option value="2">Chef cuisineir</option>
                <option value="3">Gestionnaire de commande</option>
                <option value="0">Adminstrateur</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password :</label>
              <input
                type="text"
                name="password"
                id="password"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleAddEmployee}
                className="btn btn-success btn-lg"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => ({});

export default connect(
  mapStateToProp,
  { addEmployee }
)(AddEmployee);
