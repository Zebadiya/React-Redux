import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "actions";
import requireAuth from "./requireAuth";

class CommonBox extends Component {
    state = {comment: ""};
    handleChange = (event) => {
        this.setState({comment: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ""});
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} name="" id="" cols="30" rows="10" />
                    <div>
                        <button>Submit comment</button>
                    </div>
                </form>
                <button className="fetch-button" onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        )
    }
}


export default connect(null, actions)(requireAuth(CommonBox));