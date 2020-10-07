import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import MainNode, { MainNodeProps } from "../../components/NestedProgressBar/MainNode"

export default {
  title: "Nested Progress Bar/MainNode",
  component: MainNode,
} as Meta

const Template: Story<MainNodeProps> = args => (
  <div className="bg-brand w-12 h-12 flex items-center justify-center">
    <MainNode {...args} />
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
