import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Order from "../Order";
import { getServedOrders, payOrder } from "../../actions/ordersAction";

class OrdersServedList extends Component {
  componentDidMount() {
    this.props.getServedOrders();
  }

  handlePay = id => {
    this.props.payOrder(id);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Command Servis</h3>
        </div>
        <div className="card-body">
          <div className="row">
            {orders.map(order => (
              <Order
                key={order.id}
                order={order}
                action={this.handlePay}
                actionTitle="Regler"
                title={"Table : " + order.table}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
OrdersServedList.propTypes = {
  orders: PropTypes.array.isRequired,
  getServedOrders: PropTypes.func.isRequired,
  payOrder: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  orders: state.waiter.orders.servedOrders
});

export default connect(
  mapStateToProp,
  { getServedOrders, payOrder }
)(OrdersServedList);
