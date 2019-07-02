import { shallow } from "enzyme";
import { Editor } from "./Editor";

describe("<MyComponent />", () => {
  it("find a ", () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper.find("h2")).text("Add new contact");
  });
});
