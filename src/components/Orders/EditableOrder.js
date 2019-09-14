import React, { Component } from "react";

export default class EditableOrder extends Component {
  state = {
    isDetailed: false
  };

  handleShowDetails = () => {
    this.setState({ isDetailed: true });
  };
  handleHideDetails = () => {
    this.setState({ isDetailed: false });
  };

  handleAction = () => {
    const { id } = this.props.order;
    this.props.action(id);
  };

  handleDelete = () => {
    this.props.delete(this.props.order.id);
  };
  handleEdit = () => {
    this.props.showEdit(this.props.order);
  };

  render() {
    const { order } = this.props;

    if (!this.state.isDetailed) {
      return (
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Numero : {order.id}</h5>
              <p className="card-text">
                <span>Etat : {order.state}</span>
                <span className="float-right">Total : {order.total} </span>
              </p>
              <button
                onClick={this.handleShowDetails}
                className="btn btn-success"
              >
                Show Detailes
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      const { orders } = order;
      return (
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Numero : {order.id}</h5>
              <p className="card-text">
                <span>Etat : {order.state}</span>
                <span className="float-right">Total : {order.total} </span>
              </p>
              <button
                onClick={this.handleHideDetails}
                className="btn btn-success"
              >
                Hide Detailes
              </button>
            </div>
            <div className="card-body">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td key={order.id}>{order.dish.name}</td>
                      <td key={order.id}>{order.dish.price}</td>
                      <td key={order.id}>{order.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                onClick={this.handleAction}
                className="btn btn-primary float-left"
              >
                {this.props.actionTitle}
              </button>
              <button
                onClick={this.handleEdit}
                className="btn btn-secondary float-right"
              >
                Modifier
              </button>
              <button
                onClick={this.handleDelete}
                className="btn btn-danger float-right"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
