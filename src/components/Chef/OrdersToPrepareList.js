import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order";
import {
  prepareOrder,
  getToBePreparedOrders
} from "../../actions/ordersAction";
import PropTypes from "prop-types";

class OrdersToPrepareList extends Component {
  componentDidMount() {
    this.props.getToBePreparedOrders();
  }
  handlePrepareAction = id => {
    this.props.prepareOrder(id);
  };
  render() {
    const { orders } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Commande a preparer</h3>
        </div>
        <div className="card-body">
          <div className="row">
            {orders.map(order => (
              <Order
                key={order.id}
                order={order}
                action={this.handlePrepareAction}
                actionTitle="PREPARER"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

OrdersToPrepareList.propTypes = {
  orders: PropTypes.array.isRequired,
  prepareOrder: PropTypes.func.isRequired,
  getToBePreparedOrders: PropTypes.func.isRequired
};
const mapStateToProp = state => ({
  orders: state.waiter.orders.toBePreparedOrders
});
export default connect(
  mapStateToProp,
  { prepareOrder, getToBePreparedOrders }
)(OrdersToPrepareList);
