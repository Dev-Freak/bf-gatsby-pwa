import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Slider, { SliderProps, Steps } from "../../components/Slider"

export default {
  title: "Slider/Slider",
  component: Slider,
  argTypes: {
    onChange: { action: "Click Change" },
    onIndexChange: { action: "Click index change" },
  },
} as Meta

const Template: Story<SliderProps> = args => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  steps: [
    {
      label: "7",
      value: 1,
    } as Steps,
    {
      label: "14",
      value: 2,
    } as Steps,
    {
      label: "21",
      value: 3,
    } as Steps,
    {
      label: "28",
      value: 4,
    } as Steps,
    {
      label: "35",
      value: 5,
    } as Steps,
    {
      label: "42",
      value: 6,
    } as Steps,
    {
      label: "49",
      value: 7,
    } as Steps,
    {
      label: "56",
      value: 8,
    } as Steps,
    {
      label: "60+",
      value: 9,
    } as Steps,
  ],
  onChange: e => console.log(e),
  onIndexChange: e => console.log(e),
} as SliderProps
