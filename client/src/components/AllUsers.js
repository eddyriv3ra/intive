import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/allUsersActions";
import { fetchUser } from "../actions/userSelectedAction";
import { clearUser } from "../actions/userActions";

class AllUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  clicked = user => {
    this.props.clearUser();
    this.props.fetchUser(user._id);
  };

  render() {
    const { user } = this.props.allUsers;
    const currentYear = new Date().getFullYear();
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted text-left">
            Visitantes Anteriores
          </h5>
          {user
            ? user.user.map(user => (
                <h6
                  key={user._id}
                  className="card-text text-left"
                  onClick={() => this.clicked(user)}
                >
                  {`${user.name} - ${user.country} - 01/01/${currentYear -
                    user.age}`}
                </h6>
              ))
            : "Loading"}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.allUsers
});

export default connect(mapStateToProps, { fetchUsers, fetchUser, clearUser })(
  AllUsers
);
