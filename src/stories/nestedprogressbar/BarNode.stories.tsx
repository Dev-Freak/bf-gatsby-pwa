import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import BarNode, { BarNodeProps } from "../../components/NestedProgressBar/BarNode"

export default {
  title: "Nested Progress Bar/BarNode",
  component: BarNode,
} as Meta

const Template: Story<BarNodeProps> = args => (
  <div className="bg-brand w-12 h-12 flex items-center justify-center">
    <BarNode {...args} />
  </div>
)

export const Idle = Template.bind({})

export const Active = Template.bind({})
Active.args = {
  isActive: true,
}

export const Completed = Template.bind({})
Completed.args = {
  isCompleted: true,
}
