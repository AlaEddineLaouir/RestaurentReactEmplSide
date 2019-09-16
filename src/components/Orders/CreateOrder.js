import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenu } from "../../actions/menuActions";
import { makeOrder } from "../../actions/ordersAction";
import { getNonOccupiedTAbleList } from "../../actions/tableAction";
import PickMenu from "./PickMenu";
import NewOrder from "./NewOrder";

class CreateOrder extends Component {
  state = {
    displayMenu: true,
    orders: [],
    table: 0
  };
  componentDidMount() {
    this.props.getMenu();
    this.props.getNonOccupiedTAbleList();
  }
  handleAction = () => {
    if (
      typeof this.state.orders !== "undefined" &&
      this.state.orders.length > 0
    ) {
      if (this.props.role === "RC") {
        this.props.makeOrder(this.state.orders, true);
      } else {
        if (
          typeof this.state.table !== "undefined" &&
          this.state.table.length > 0
        ) {
          this.props.makeOrder(this.state.orders, false, this.state.table);
        } else {
          alert("Selction dune table obligatiore");
        }
      }
    } else {
      alert("Il faut au loin un plat");
    }
  };
  handleShowMenu = () => {
    this.setState({ displayMenu: true });
  };
  handleShowOrder = () => {
    this.setState({ displayMenu: false });
  };

  handleTableChange = id => {
    this.setState({ table: id });
  };

  onDishAdded = (dish, quantity) => {
    let existe = false;
    this.setState({
      orders: this.state.orders.map(order => {
        if (order.dish.id === dish.id) {
          existe = true;
          return Object.assign({}, order, {
            quantity: eval(order.quantity) + eval(quantity)
          });
        } else {
          return order;
        }
      })
    });
    if (!existe) {
      this.setState({ orders: this.state.orders.concat({ quantity, dish }) });
    }
  };
  onQuantityChange = (id, quantity) => {
    this.setState({
      orders: this.state.orders.map(order => {
        if (order.dish.id === id) {
          return Object.assign({}, order, { quantity });
        } else {
          return order;
        }
      })
    });
  };
  onDelete = id => {
    this.setState({
      orders: this.state.orders.filter(order => order.dish.id !== id)
    });
  };

  render() {
    if (this.state.displayMenu) {
      return (
        <div className="container text-center">
          <button onClick={this.handleShowMenu} className="btn btn-primary">
            Menu
          </button>
          <button onClick={this.handleShowOrder} className="btn btn-primary">
            Ma Commande
          </button>
          <PickMenu
            categories={this.props.categories}
            addDish={this.onDishAdded}
          />
        </div>
      );
    } else {
      return (
        <div className="container text-center">
          <button onClick={this.handleShowMenu} className="btn btn-primary">
            Menu
          </button>
          <button onClick={this.handleShowOrder} className="btn btn-primary">
            Ma Commande
          </button>

          <NewOrder
            orders={this.state.orders}
            onQuantityChange={this.onQuantityChange}
            onDelete={this.onDelete}
            action={this.handleAction}
            actionTitle="Commander"
            tables={this.props.tables}
            onTableChange={this.handleTableChange}
            role={this.props.role}
          />
        </div>
      );
    }
  }
}

CreateOrder.propTypes = {
  categories: PropTypes.array.isRequired,
  getMenu: PropTypes.func.isRequired,
  makeOrder: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  tables: PropTypes.array.isRequired
};
const mapStateToProp = state => ({
  categories: state.menu.categories,
  role: state.employeeAccount.User.role,
  tables: state.tables.nonOccupied
});
export default connect(
  mapStateToProp,
  { getMenu, makeOrder, getNonOccupiedTAbleList }
)(CreateOrder);
