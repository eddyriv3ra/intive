import React, { Component } from "react";
import { fetchCountries } from "../actions/countriesActions";
import { insertUser } from "../actions/userActions";
import { fetchUsers } from "../actions/allUsersActions";
import { connect } from "react-redux";

class UserForm extends Component {
  state = {
    name: "",
    age: "",
    country: "",
    ageError: ""
  };

  componentDidMount() {
    this.props.fetchCountries();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;

    if (this.state.age < 0) {
      isError = true;
      this.setState({ ageError: "Age has to be a positive number" });
    }

    return isError;
  };

  handleSubmit = e => {
    e.preventDefault();

    const err = this.validate();

    if (!err) {
      const newUser = {
        name: this.state.name,
        country: this.state.country,
        age: this.state.age
      };

      this.props.insertUser(newUser);

      this.setState({
        name: "",
        age: "",
        country: "",
        ageError: ""
      });

      this.props.fetchUsers();
    }
  };

  render() {
    const { countries } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="col">
        <div className="form-group row">
          <label className="col-sm-2 col-12" htmlFor="nameContent">
            <span className="labels">Nombre:</span>
          </label>
          <input
            name="name"
            type="text"
            className="form-control col-sm-8 col-11 self-align-center"
            id="nameContent"
            placeholder="Nombre"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">Name is required</div>
        </div>
        <div className="form-group row input-countries">
          <label className="col-sm-2 col-12" htmlFor="countryContent">
            <span className="labels">Pais</span>
          </label>
          <select
            name="country"
            required
            id="countryContent"
            className="form-control col-sm-8 col-11 self-align-center"
            value={this.state.country}
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Paises
            </option>
            {countries &&
              countries.map(country => (
                <option key={country.name}>{country.name}</option>
              ))}
          </select>
          {this.state.countryError ? <p>{this.state.countryError}</p> : ""}
        </div>
        <div className="form-group row input-age">
          <label className="col-sm-2 col-12" htmlFor="ageContent">
            <span className="labels">Edad</span>
          </label>
          <input
            name="age"
            type="number"
            className="form-control col-sm-8 col-11 self-align-center"
            id="ageContent"
            placeholder="Edad"
            required
            value={this.state.age}
            onChange={this.handleChange}
          />
          <div>{this.state.ageError ? <p>{this.state.ageError}</p> : ""}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          <span className="greeting">Saludar</span>
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.countries,
  allUsers: state.allUsers
});

export default connect(mapStateToProps, {
  fetchCountries,
  insertUser,
  fetchUsers
})(UserForm);
