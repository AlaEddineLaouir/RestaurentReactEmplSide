import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getOnDeliveryOrders,
  payDeliveryOrder
} from "../../actions/ordersAction";
import Order from "../Order";

class OrdersOnDelivery extends Component {
  componentDidMount() {
    this.props.getOnDeliveryOrders();
  }
  handlePay = id => {
    this.props.payDeliveryOrder(id);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Commandes On Livraison</h3>
        </div>
        <div className="card-body">
          {orders.map(order => (
            <Order
              key={order.id}
              order={order}
              action={this.handlePay}
              actionTitle="Regler"
            />
          ))}
        </div>
      </div>
    );
  }
}
OrdersOnDelivery.propTypes = {
  orders: PropTypes.array.isRequired,
  getOnDeliveryOrders: PropTypes.func.isRequired,
  payDeliveryOrder: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  orders: state.waiter.orders.onDeliveryOrders
});

export default connect(
  mapStateToProp,
  { getOnDeliveryOrders, payDeliveryOrder }
)(OrdersOnDelivery);
