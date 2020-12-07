import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Slider, { SliderProps, Steps, ValueType } from "../../components/Slider"

export default {
  title: "Slider/Slider",
  component: Slider,
  argTypes: {
    onChange: { action: "Click Change" },
  },
} as Meta

const Template: Story<SliderProps> = args => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  steps: ["7", "14", "21", "28", "35", "42", "49", "56", "60+"] as Steps,
  onChange: (e: ValueType) => console.log(e),
} as SliderProps
