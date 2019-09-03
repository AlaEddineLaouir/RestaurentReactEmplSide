import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginForm from "./Auth/LoginForm";
import AdminSpace from "./Admin/AdminSpace";
import WaiterSpace from "./Waiter/WaiterSpace";
import CachierSpace from "./Cashier/CachierSpace";
import ChefSpace from "./Chef/ChefSpace";
import DeliveryGuySpace from "./DeliveryGuy/DeliveryGuySpace";
import ManagerSpace from "./Manager/ManagerSpace";
import { Redirect } from "react-router-dom";

class MainPage extends Component {
  render() {
    const { role } = this.props.user;
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }
    switch (role) {
      case "admin":
        return <AdminSpace />;
      case "serveur":
        return <WaiterSpace />;
      case "caissier":
        return <CachierSpace />;
      case "chef":
        return <ChefSpace />;
      case "livreur":
        return <DeliveryGuySpace />;
      case "RC":
        return <ManagerSpace />;
      default:
        return <LoginForm />;
    }
  }
}

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
const mapStateToProp = state => ({
  user: state.employeeAccount.User,
  isLoggedIn: state.employeeAccount.isLoggedIn
});
export default connect(
  mapStateToProp,
  {}
)(MainPage);
