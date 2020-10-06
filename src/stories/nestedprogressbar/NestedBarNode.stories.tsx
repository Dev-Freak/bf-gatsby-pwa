import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import NestedBarNode, {
  NestedBarNodeProps,
} from "../../components/NestedProgressBar/NestedBarNode"

export default {
  title: "Nested Progress Bar/NestedBarNode",
  component: NestedBarNode,
} as Meta

const Template: Story<NestedBarNodeProps> = args => (
  <div className="bg-brand w-8 h-8 flex items-center justify-center">
    <NestedBarNode {...args} />
  </div>
)

export const Idle = Template.bind({})

export const Active = Template.bind({})
Active.args = {
  isActive: true,
}
