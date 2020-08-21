import React, { Component, Fragment } from "react";
import { CheckToken } from "../../services/auth";

export const PrivateRoute = (ComposedComponent) => {
  class PrivateRoute extends Component {
    componentWillMount() {
        CheckToken().then(data => {
            if(!data.success) this.props.history.push("/login");
        })
    }

    render() {
      return (
        <Fragment>
          <ComposedComponent {...this.props} />
        </Fragment>
      );
    }
  }

  return PrivateRoute;
};
