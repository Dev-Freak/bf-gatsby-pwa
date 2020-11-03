import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Node, { NodeProps } from "../../components/Slider/Node"

export default {
  title: "Slider/Node",
  component: Node,
  argTypes: { onClick: { action: "clicked" } },
} as Meta

const Template: Story<NodeProps> = args => <Node {...args} />

export const Default = Template.bind({})
Default.args = {}
