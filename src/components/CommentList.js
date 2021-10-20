import React, {Component} from 'react';
import {connect} from "react-redux";

class CommonList extends Component {
    renderCommonList() {
        return this.props.comments.map((comment, index) => {
            return <li key={`${comment}_${index}`}>{comment}</li>
            return <li key={comment}>{comment}</li>
        })
    }
    render() {
        return (
            <div>
                <h1>Comment list</h1>
                <ul>
                    {this.renderCommonList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments,
});


export default connect(mapStateToProps)(CommonList);