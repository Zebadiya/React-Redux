import React from 'react';

import {mount} from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach( () => {
    wrapped = mount(<Root><CommentBox /></Root>);
})

it("should render textarea and button in CommentBox component", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
});

describe("text area", () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", {target: {value: "New string"}});
        wrapped.update();
    });
    it("has a text area that user can type in", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("New string")
    });
    it("clear an input when form is submitted", () => {
        wrapped.find("form").simulate("submit");
        expect(wrapped.find("textarea").prop("value")).toEqual("")
    });
});

afterEach( () => {
    wrapped.unmount();
})