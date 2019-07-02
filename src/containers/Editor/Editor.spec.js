import { shallow } from "enzyme";
import { React } from "react";

import Editor from "./Editor";

describe("<MyComponent />", () => {
  it("find a text in a h2", () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper.find("h2")).text("Add new contact");
  });
});
