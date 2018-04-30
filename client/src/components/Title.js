import React, { Component } from "react";
import { connect } from "react-redux";

class Title extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="title">
        <h2>Ejercicio Intive</h2>
        <h4>
          Nombre:
          {user.name ? ` ${user.name}` : ` {nombre}`}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Title);
