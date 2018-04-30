import React, { Component } from "react";
import { connect } from "react-redux";

class Greet extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="col">
        <h4 className="greet-style">
          Hola
          {user.name
            ? ` ${user.name} de ${
                user.country
              }, el 01 del 01 tendras ${user.age + 1}`
            : " {nombre} de {Pais}, el {dia} del {mes} tendrás {años}"}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Greet);
