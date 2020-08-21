import React, {Component, Fragment} from "react";
import { CheckToken } from "../../services/auth";

export const AuthRoute = ComposedComponent => {
    
    class AuthRoute extends Component {
        componentWillMount() {
            CheckToken().then(data => {
                if(data.success) this.props.history.push("/home");
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

    return AuthRoute;
};