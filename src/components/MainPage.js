import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginForm from "./Auth/LoginForm";
import AdminSpace from "./Admin/AdminSpace";
import WaiterSpace from "./Waiter/WaiterSpace";
import CachierSpace from "./Cashier/CachierSpace";
import ChefSpace from "./Chef/ChefSpace";

class MainPage extends Component {
  render() {
    const { role } = this.props.user;

    switch (role) {
      case "admin":
        return <AdminSpace />;
      case "serveur":
        return <WaiterSpace />;
      case "caissier":
        return <CachierSpace />;
      case "chef":
        return <ChefSpace />;
      default:
        return <LoginForm />;
    }
  }
}

MainPage.propTypes = {
  user: PropTypes.object.isRequired
};
const mapStateToProp = state => ({
  user: state.employeeAccount.User
});
export default connect(
  mapStateToProp,
  {}
)(MainPage);
