import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getToBeDeliveredOrders,
  deliverOrder
} from "../../actions/ordersAction";
import Order from "../Order";

class OrdersToBeDelivered extends Component {
  componentDidMount() {
    this.props.getToBeDeliveredOrders();
  }
  handleDeliver = id => {
    this.props.deliverOrder(id);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Commande a livrer</h3>
        </div>
        <div className="card-body">
          {orders.map(order => (
            <Order
              key={order.id}
              order={order}
              action={this.handleDeliver}
              actionTitle="Livrer"
              title={"Adress : " + order.adress}
            />
          ))}
        </div>
      </div>
    );
  }
}
OrdersToBeDelivered.propTypes = {
  orders: PropTypes.array.isRequired,
  getToBeDeliveredOrders: PropTypes.func.isRequired,
  deliverOrder: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  orders: state.waiter.orders.toBeDeliveredOrders
});

export default connect(
  mapStateToProp,
  { getToBeDeliveredOrders, deliverOrder }
)(OrdersToBeDelivered);
