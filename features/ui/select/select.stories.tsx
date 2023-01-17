import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select, SelectDisabled, SelectOption } from "./select";

const defaultOptions = [
  {
    label: "Phoenix Baker",
    id: 0,
  },
  {
    label: "Olivia Rhye",
    id: 2,
  },
  {
    label: "Lana Steiner",
    id: 3,
  },
  {
    label: "Demi Wilkinson",
    id: 4,
  },
  {
    label: "Candice Wu",
    id: 5,
  },
  {
    label: "Natali Craig",
    id: 6,
  },
  {
    label: "Drew Cano",
    id: 7,
  },
];

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({ disabled }) => (
  <div style={{ padding: 50 }}>
    <Select disabled={disabled} options={defaultOptions}></Select>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  disabled: SelectDisabled.true,
};
Default.parameters = {
  viewMode: "docs",
};

export const withdisabled = Template.bind({});
Default.args = {
  disabled: SelectDisabled.false,
};
Default.parameters = {
  viewMode: "docs",
};
