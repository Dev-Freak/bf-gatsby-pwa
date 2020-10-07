import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import NestedItem, {
  NestedItemProps,
} from "../../components/NestedProgressBar/NestedItem"

import NestedLabel from "../../components/NestedProgressBar/NestedLabel"
import NestedNode from "../../components/NestedProgressBar/NestedNode"

export default {
  title: "Nested Progress Bar/NestedItem",
  component: NestedItem,
} as Meta

const Template: Story<NestedItemProps> = args => (
  <div className="bg-brand w-64 h-20 flex items-center justify-center">
    <NestedItem>
      <NestedNode {...args} />
      <NestedLabel>Basic Information</NestedLabel>
    </NestedItem>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  isActive: true,
}
