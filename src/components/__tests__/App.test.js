import React from 'react';

import {shallow} from "enzyme";
import App from 'components/App';
import Root from "Root";
import {BrowserRouter} from "react-router-dom";
let wrapper;

beforeEach( () => {
    wrapper = shallow(<Root>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Root>);
})

it("should render CommentList component", () => {
    expect(wrapper.render().text()).toContain("Comment list");
});
it("should render redirect links", () => {
    expect(wrapper.render().text()).toContain("Home");
    expect(wrapper.render().text()).toContain("Post");
});