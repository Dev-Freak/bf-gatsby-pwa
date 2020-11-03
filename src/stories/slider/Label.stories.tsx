import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Label from "../../components/Slider/Label"

export default {
  title: "Slider/Label",
  component: Label,
} as Meta

const Template: Story = args => <Label>7</Label>

export const Default = Template.bind({})
