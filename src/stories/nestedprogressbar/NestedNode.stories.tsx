import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import NestedNode, {
  NestedNodeProps,
} from "../../components/NestedProgressBar/NestedNode"

export default {
  title: "Nested Progress Bar/NestedNode",
  component: NestedNode,
} as Meta

const Template: Story<NestedNodeProps> = args => (
  <div className="bg-brand w-8 h-8 flex items-center justify-center">
    <NestedNode {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  isActive: true,
}
