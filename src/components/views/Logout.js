import React from "react";
import { Redirect } from "react-router-dom";
import base from "../../base";
import Loading from "../content/Loading";
import { FormattedMessage } from "react-intl";

class Logout extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  async componentDidMount() {
    await base.auth().signOut();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-and-signup">
        <div className="form-card">
          <h1>
            <FormattedMessage id="logout" defaultMessage="Cerrando sesión" />
          </h1>
          <Loading />
        </div>
      </div>
    );
  }
}

export default Logout;
