import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Slider, { SliderProps, StepsType, ValueType } from "../../components/Slider"

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
    } as StepsType,
    {
      label: "14",
      value: 2,
    } as StepsType,
    {
      label: "21",
      value: 3,
    } as StepsType,
    {
      label: "28",
      value: 4,
    } as StepsType,
    {
      label: "35",
      value: 5,
    } as StepsType,
    {
      label: "42",
      value: 6,
    } as StepsType,
    {
      label: "49",
      value: 7,
    } as StepsType,
    {
      label: "56",
      value: 8,
    } as StepsType,
    {
      label: "60+",
      value: 9,
    } as StepsType,
  ],
  onChange: (e: ValueType) => console.log(e),
  onIndexChange: (e: number) => console.log(e),
} as SliderProps
