import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import {connect} from "react-redux";
import CommonBox from "components/CommentBox";
import CommonList from "components/CommentList";
import * as actions from "actions";

class App extends Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button className="sign_out_button" onClick={() => this.props.changeAuth(false)}>Sign out</button>
            )
        } else {
            return (
                <button className="sign_in_button" onClick={() => this.props.changeAuth(true)}>Sign in</button>
            )
        }
    }
    renderHeader() {
        return (
            <ul>
                <li>
                    <BrowserRouter>
                        <Link to="/">Home</Link>
                    </BrowserRouter>
                </li>
                <li>
                    <BrowserRouter>
                        <Link to="/post">Post</Link>
                    </BrowserRouter>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommonBox}/>
                <Route path="/" exact component={CommonList}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    changeAuth: (isLoggedIn) => dispatch(actions.changeAuth(isLoggedIn)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);