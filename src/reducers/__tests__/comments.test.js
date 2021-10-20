import commentsReducer from "reducers/comments";
import {SAVE_COMMENT} from "actions/types";

it("handles action of a type SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New comment",
    }
    const state = commentsReducer([], action);
    expect(state).toEqual(["New comment"]);
})

it("don't throw an error when type is unknown", () => {
    const newState = commentsReducer([], {type: "Unknown"});
    expect(newState).toEqual([]);
})