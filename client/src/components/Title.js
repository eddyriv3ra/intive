import React, { Component } from "react";
import { connect } from "react-redux";

class Title extends Component {
  render() {
    const { user } = this.props;
    const { userSelected } = this.props;

    let userName;

    if (user) {
      userName = user.name;
    } else if (userSelected) {
      userName = userSelected.name;
    }

    return (
      <div className="title">
        <h2>Ejercicio Intive</h2>
        <h4>
          Nombre:
          {userName ? ` ${userName}` : ` {nombre}`}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userSelected: state.userSelected
});

export default connect(mapStateToProps, null)(Title);
