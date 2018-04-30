import React, { Component } from "react";
import { connect } from "react-redux";

class Greet extends Component {
  render() {
    const { user } = this.props.user;
    const { userSelected } = this.props.userSelected;

    let userData;

    if (user) {
      userData = user.user;
    } else if (userSelected) {
      userData = userSelected;
    }
    return (
      <div className="col">
        <h4 className="greet-style">
          Hola
          {userData
            ? ` ${userData.name} de ${
                userData.country
              }, el 01 del 01 tendras ${userData.age + 1}`
            : " {nombre} de {Pais}, el {dia} del {mes} tendrás {años}"}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userSelected: state.userSelected
});

export default connect(mapStateToProps, null)(Greet);
