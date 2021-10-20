import {saveComment} from "actions";
import {SAVE_COMMENT} from "actions/types";

describe("save comment", () => {
    it("return a correct type", () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it("return a correct data", () => {
        const action = saveComment("New comment");
        expect(action.payload).toEqual("New comment");
    })
});
