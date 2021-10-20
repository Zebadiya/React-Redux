import React, {Component} from "react";
import {connect} from "react-redux";

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.ifUserLoggedin();
        };
        componentDidUpdate(prevProps, prevState, snapshot) {
            this.ifUserLoggedin();
        };
        ifUserLoggedin = () => {
            if(!this.props.auth) {
                this.props.history && this.props.history.push("/");
            }
        }
        render() {
            return (
                <ChildComponent {...this.props} />
            )
        }
    }
    const mapStateToProps = (state) => ({
        auth: state.auth,
    });
    return connect(mapStateToProps)(ComposedComponent);
};