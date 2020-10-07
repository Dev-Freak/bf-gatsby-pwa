import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import NestedProgressBar, {
  NestedProgressBarProps,
} from "../../components/NestedProgressBar"

export default {
  title: "Nested Progress Bar/NestedProgressBar",
  component: NestedProgressBar,
} as Meta

const Template: Story<NestedProgressBarProps> = args => (
  <NestedProgressBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  currentNode: 5,
  item: [
    {
      title: "First",
      subNodes: ["First-SubFirst", "First-SubSecond", "First-SubThird"],
    },
    {
      title: "Second",
      subNodes: ["Second-SubFirst", "Second-SubSecond", "Second-SubThird"],
    },
    {
      title: "Third",
      subNodes: ["Third-SubFirst", "Third-SubSecond", "Third-SubThird"],
    },
  ] /*  as Array<ItemProps> */,
}
