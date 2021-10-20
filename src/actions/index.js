import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from "actions/types";
import axios from "axios";

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment,
    }
}

export function fetchComments() {
    const comments = axios.get("http://my-json-server.typicode.com/typicode/demo/comments");
    return {
        type: FETCH_COMMENTS,
        payload: comments,
    }
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn,
    }
}