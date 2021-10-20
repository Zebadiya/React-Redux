import React from "react";
import {mount} from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

const state = {
    comments: ["Comment 1", "Comment 2"]
};

const wrapper = mount(
    <Root initialState={state}>
        <CommentList />
    </Root>
);

it("render li for each comment", () => {
    expect(wrapper.find("li").length).toEqual(2);
});
it("show text for each component", () => {
    expect(wrapper.render().text()).toContain("Comment 1");
    expect(wrapper.render().text()).toContain("Comment 2");
})

afterAll(() => {
    wrapper.unmount();
})