import {mount} from "enzyme";
import Root from "Root";
import App from "components/App";
import {moxios} from "moxios";
const wrapper = mount(<Root><App /></Root>);

beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://my-json-server.typicode.com/typicode/demo/comments", {
        status: 200,
        response: [{body: "comment 1"}, {body: "comment 2"}],
    })
})

afterEach(() => {
    moxios.uninstall();
})
it("render App and return list of comments by pressing a button", (done) => {
    wrapper.find(".fetch-button").simulate("click");
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find("li").length).toEqual(2);
        done();
    })
});

afterAll(() => {
    wrapper.unmount();
})