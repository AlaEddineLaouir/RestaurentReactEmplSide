import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order";
import {
  getOnPreparetionOrders,
  preparedOrder
} from "../../actions/ordersAction";
import PropTypes from "prop-types";

class OrdersPreparedList extends Component {
  handleDonePreparing = id => {
    this.props.preparedOrder(id);
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
                order={order}
                key={order.id}
                action={this.handleDonePreparing}
                actionTitle="PRET"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

OrdersPreparedList.propTypes = {
  orders: PropTypes.array.isRequired,
  preparedOrder: PropTypes.func.isRequired,
  getOnPreparetionOrders: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  orders: state.waiter.orders.onPreparationOrders
});
export default connect(
  mapStateToProp,
  { preparedOrder, getOnPreparetionOrders }
)(OrdersPreparedList);
