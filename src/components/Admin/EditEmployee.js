import React, { Component } from "react";
import { connect } from "react-redux";

import { editEmployee } from "../../actions/employeesActions";

class EditEmployee extends Component {
  state = { id: 0, name: "", phone: "", email: "", role: 1, password: "" };
  componentDidMount() {
    const { id, name, phone, email, role, password } = this.props.employee;
    this.setState({ id, name, phone, email, role, password });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEditEmployee = e => {
    e.preventDefault();

    const { id, name, phone, email, role, password } = this.state;

    this.props.editEmployee({ id, name, phone, email, role, password });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Modifier Compte Employee</div>
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
                value={this.state.name}
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
                value={this.state.email}
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
                value={this.state.phone}
              />
            </div>
            <div className="form-group">
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                name="role"
                onChange={this.onChange}
                value={this.state.role}
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
                value={this.state.password}
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleEditEmployee}
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
  { editEmployee }
)(EditEmployee);
