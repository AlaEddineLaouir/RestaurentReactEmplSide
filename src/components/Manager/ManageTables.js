import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getTablesList,
  deleteTable,
  addTable,
  editTable
} from "../../actions/tableAction";
class ManageTables extends Component {
  componentDidMount() {
    this.props.getTablesList();
  }

  state = {
    showForm: false,
    type: "add",
    table: {}
  };

  handleShowForm = (show = true, type = "add", table = {}) => {
    this.setState({ showForm: show, type: type, table: table });
  };

  render() {
    if (this.state.showForm) {
      if (this.state.type === "add") {
        return (
          <TableForm
            action={this.props.addTable}
            actionTitle="Ajouter"
            table={{ position: "" }}
          />
        );
      } else {
        return (
          <TableForm
            action={this.props.editTable}
            actionTitle="Modifier"
            table={this.state.table}
          />
        );
      }
    } else {
      const { tables } = this.props;
      return (
        <div className="card">
          <div className="card-header">
            Liste des table
            <button
              className="btn btn-success float-right"
              onClick={this.handleShowForm}
            >
              Ajouter Table
            </button>
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Numero</th>
                  <th>Emplacement</th>
                  <th>Etat</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tables.map(table => (
                  <Table
                    key={table.id}
                    deleteTable={this.props.deleteTable}
                    table={table}
                    showForm={this.handleShowForm}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

class TableForm extends Component {
  state = {
    position: "",
    table: {}
  };
  componentDidMount() {
    this.setState({
      position: this.props.table.position,
      table: this.props.table
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    let { table } = this.props;
    table.position = this.state.position;

    this.props.action(table);
  };

  render() {
    const { actionTitle } = this.props;
    const { position } = this.state;
    return (
      <div className="card">
        <div className="card-header">{actionTitle} une table</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="placement">Placement :</label>
              <input
                type="text"
                className="form-control"
                name="position"
                id="placement"
                value={position}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" onClick={this.onSubmit}>
                {actionTitle}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
class Table extends Component {
  handleDelete = () => {
    const { id } = this.props.table;
    this.props.deleteTable(id);
  };
  handleEdit = () => {
    const { table } = this.props;
    this.props.showForm(true, "edit", table);
  };
  render() {
    let { id, position, occupied } = this.props.table;
    if (occupied) occupied = "Occupé";
    else occupied = "libre";
    return (
      <tr>
        <td>{id}</td>
        <td>{position}</td>
        <td>{occupied}</td>
        <td>
          {" "}
          <button class="btn btn-primary btn-sm" onClick={this.handleEdit}>
            Modifier
          </button>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" onClick={this.handleDelete}>
            Supprimer
          </button>
        </td>
      </tr>
    );
  }
}

ManageTables.propTypes = {
  tables: PropTypes.array.isRequired,
  getTablesList: PropTypes.func.isRequired,
  addTable: PropTypes.func.isRequired,
  editTable: PropTypes.func.isRequired,
  deleteTable: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  tables: state.tables.tables
});

export default connect(
  mapStateToProp,
  { getTablesList, deleteTable, addTable, editTable }
)(ManageTables);
