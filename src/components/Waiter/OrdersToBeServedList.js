import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrdersToBeServed, serveOrder } from "../../actions/ordersAction";
import Order from "../Order";
class OrdersToBeServedList extends Component {
  componentDidMount() {
    this.props.getOrdersToBeServed();
  }
  handleServis = id => {
    this.props.serveOrder(id);
  };

  //Here At the Render We must add If Else to either dispaly table or TakeAway in Order
  render() {
    const { orders } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Commande a servir</h3>
        </div>
        <div className="card-body">
          <div className="row">
            {orders.map(order => (
              <Order
                key={order.id}
                order={order}
                action={this.handleServis}
                actionTitle="Servis"
                title={"Table : " + order.table}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

OrdersToBeServedList.propTypes = {
  orders: PropTypes.array.isRequired,
  getOrdersToBeServed: PropTypes.func.isRequired,
  serveOrder: PropTypes.func.isRequired
};
const mapStateToProp = state => ({
  orders: state.waiter.orders.toBeServedOrders
});
export default connect(
  mapStateToProp,
  { getOrdersToBeServed, serveOrder }
)(OrdersToBeServedList);
