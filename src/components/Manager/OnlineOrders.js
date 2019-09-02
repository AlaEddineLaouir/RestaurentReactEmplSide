import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Order from "../Order";
import { valideOrder, getOnlineOrders } from "../../actions/ordersAction";

class OnlineOrders extends Component {
  componentDidMount() {
    this.props.getOnlineOrders();
  }
  handleValidate = id => {
    this.props.valideOrder(id);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Commandes Onlines</h3>
        </div>
        <div className="card-body">
          <div className="row">
            {orders.map(order => (
              <Order
                key={order.id}
                order={order}
                action={this.handleValidate}
                actionTitle="Valider"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

OnlineOrders.propTypes = {
  valideOrder: PropTypes.func.isRequired,
  getOnlineOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired
};

const mapStateToProp = state => ({
  orders: state.waiter.orders.onlineOrders
});

export default connect(
  mapStateToProp,
  { valideOrder, getOnlineOrders }
)(OnlineOrders);
