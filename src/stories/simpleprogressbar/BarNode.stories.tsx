import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import BarNode, { BarNodeProps } from "../../components/SimpleProgressBar/BarNode"

export default {
  title: "Simple Progress Bar/BarNode",
  component: BarNode,
} as Meta

const Template: Story<BarNodeProps> = args => <BarNode {...args} />

export const Idle = Template.bind({})

export const Active = Template.bind({})
Active.args = {
  isActive: true,
}

export const Completed = Template.bind({})
Completed.args = {
  isCompleted: true,
}
