import React, { useState as useStateMock } from "react";
import { mount, shallow } from "enzyme";

import Progress from "./Progress.js";
import Icon from "../../general/icon/Icon.js";

describe("Progress - Snapshot", () => {
  test("Renders the component correctly", () => {
    const wrapper = shallow(<Progress current={20} color="#87CEEB" />);

    expect(wrapper).toMatchSnapshot();
  });
  test("Values of props are correct", () => {
    const wrapper = mount(
      <Progress current={20} color="#87CEEB" />
    );

    expect(wrapper.prop("current")).toBe(20);
    expect(wrapper.prop("hideLabel")).toBe(false);
    expect(wrapper.prop("color")).toEqual("#87CEEB");
  });
});
