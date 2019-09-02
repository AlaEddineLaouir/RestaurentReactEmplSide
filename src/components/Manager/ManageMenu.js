import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getMenu,
  addCategory,
  addPlat,
  editCategory,
  editPlat,
  deleteCategory,
  deletePlat
} from "../../actions/menuActions";
class ManageMenu extends Component {
  componentDidMount() {
    this.props.getMenu();
  }

  state = {
    navigate: "categoryList"
  };

  handleNavigation = (navigate, category = {}, plat = {}) => {
    this.setState({
      navigate: navigate,
      category: category,
      plat: plat
    });
  };

  render() {
    switch (this.state.navigate) {
      case "categoryList":
        return (
          <CategoryList
            categories={this.props.categories}
            navigation={this.handleNavigation}
            deleteCategory={this.props.deleteCategory}
          />
        );
      case "editCategory":
        return (
          <CategoryForm
            submitAction={this.props.editCategory}
            actionTitle="Modifier"
            category={this.state.category}
          />
        );
      case "addCategory":
        return (
          <CategoryForm
            submitAction={this.props.addCategory}
            actionTitle="Ajouter"
            category={{ name: "" }}
          />
        );
      case "platsList":
        return (
          <PlatList
            category={this.state.category}
            navigation={this.handleNavigation}
            deletePlat={this.props.deletePlat}
          />
        );
      case "editPlat":
        return (
          <PlatForm
            action={this.props.editPlat}
            actionTitle="Modifier"
            plat={this.state.plat}
            categoryId={this.state.category}
          />
        );
      case "addPlat":
        return (
          <PlatForm
            action={this.props.addPlat}
            actionTitle="Ajouter"
            categoryId={this.state.category}
            plat={{ name: "", description: "", price: 0 }}
          />
        );
      default:
        return (
          <CategoryList
            categories={this.props.categories}
            navigation={this.handleNavigation}
            deleteCategory={this.props.deleteCategory}
          />
        );
    }
  }
}

class CategoryList extends Component {
  handleAddCategory = () => {
    this.props.navigation("addCategory");
  };

  render() {
    const { categories } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h5 className="card-title">
            Categories :
            <button
              className="btn btn-primary float-right"
              onClick={this.handleAddCategory}
            >
              Ajouter Category
            </button>
          </h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Plats</th>
                <th>Modifier</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <Category
                  key={category.id}
                  category={category}
                  navigation={this.props.navigation}
                  deleteCategory={this.props.deleteCategory}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
class PlatList extends Component {
  handleAddPlat = () => {
    this.props.navigation("addPlat", this.props.category.id);
  };
  render() {
    const { category } = this.props;
    return (
      <div className="card card-default">
        <div className="card-header">
          <h2>
            Category : <strong>{category.name}</strong>
          </h2>
        </div>
        <div className="card-body">
          <div className="card-header">
            <h3>
              List plat{" "}
              <button
                className="btn btn-primary float-right"
                onClick={this.handleAddPlat}
              >
                Ajouter Plat
              </button>
            </h3>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Desctiption</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {category.dishes.map(dish => (
                <Dish
                  key={dish.id}
                  deletePlat={this.props.deletePlat}
                  plat={dish}
                  categoryId={category.id}
                  navigation={this.props.navigation}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class Dish extends Component {
  handleDelete = () => {
    const { categoryId } = this.props;
    const plat = this.props.plat.id;

    this.props.deletePlat({ categoryId, plat });
  };
  handleEdit = () => {
    const { categoryId, plat } = this.props;
    this.props.navigation("editPlat", categoryId, plat);
  };

  render() {
    const { plat } = this.props;
    return (
      <tr>
        <td>{plat.name}</td>
        <td>{plat.description}</td>
        <td>{plat.price}</td>

        <td>
          {" "}
          <button className="btn btn-primary btn-sm" onClick={this.handleEdit}>
            Edit
          </button>
        </td>

        <td>
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
class CategoryForm extends Component {
  state = {
    name: "",
    category: {}
  };
  componentDidMount() {
    this.setState({
      name: this.props.category.name,
      category: this.props.category
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { category } = this.state;
    category.name = this.state.name;

    this.props.submitAction(category);
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { actionTitle } = this.props;
    const { name } = this.state;
    return (
      <div className="card">
        <div className="card-header">{actionTitle} Category</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div class="form-group">
              <button class="btn btn-success" onClick={this.onSubmit}>
                {actionTitle}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class Category extends Component {
  handleDeleteCategory = () => {
    const id = this.props.category.id;
    this.props.deleteCategory(id);
  };
  handleShowEditCategory = () => {
    const { category } = this.props;
    const navigate = "editCategory";
    this.props.navigation(navigate, category);
  };
  handleShowPlatList = () => {
    const { category } = this.props;
    const navigate = "platsList";
    this.props.navigation(navigate, category);
  };

  render() {
    const { category } = this.props;
    return (
      <tr>
        <td>{category.name}</td>
        <td>
          <button className="btn btn-success" onClick={this.handleShowPlatList}>
            Plats
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary"
            onClick={this.handleShowEditCategory}
          >
            Modifier
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={this.handleDeleteCategory}
          >
            Supprimer
          </button>
        </td>
      </tr>
    );
  }
}
class PlatForm extends Component {
  state = {
    name: "",
    price: 0,
    description: ""
  };
  componentDidMount() {
    this.setState({
      plat: this.props.plat,
      categoryId: this.props.categoryId,
      name: this.props.plat.name,
      price: this.props.plat.price,
      description: this.props.plat.description
    });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const { categoryId } = this.props;

    let { plat, name, price, description } = this.state;
    plat = { ...plat, name, price, description };

    this.props.action({ categoryId, plat });
  };
  render() {
    const { actionTitle } = this.props;
    const { name, price, description } = this.state;
    return (
      <div className="card">
        <div className="card-header">{actionTitle} Plat</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </div>

            <div class="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={price}
                onChange={this.onChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="form-control"
                value={description}
                onChange={this.onChange}
              />
            </div>

            <div class="form-group">
              <button class="btn btn-success" onClick={this.onSubmit}>
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ManageMenu.propTypes = {
  categories: PropTypes.array.isRequired,
  getMenu: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  addPlat: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  editPlat: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  deletePlat: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  categories: state.menu.categories
});

export default connect(
  mapStateToProp,
  {
    getMenu,
    addCategory,
    addPlat,
    editCategory,
    editPlat,
    deleteCategory,
    deletePlat
  }
)(ManageMenu);
