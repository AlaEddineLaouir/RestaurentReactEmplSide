import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/employeesActions";
class ChefNavigation extends Component {
  handleShowNewOrders = () => {
    this.props.navigation(true);
  };
  handleHideNewOrders = () => {
    this.props.navigation(false);
  };
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div class="card card-default">
        <div class="card-header">
          Chef cuisinie
          <button
            className="btn btn-danger float-right"
            onClick={this.handleLogout}
          >
            Quitter
          </button>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">
              <button
                onClick={this.handleShowNewOrders}
                className="btn btn-primary"
              >
                List Des Nouvelles Commandes
              </button>
            </li>
            <li class="list-group-item">
              <button
                onClick={this.handleHideNewOrders}
                className="btn btn-primary"
              >
                List Des Commandes en Traitement
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
)(ChefNavigation);
