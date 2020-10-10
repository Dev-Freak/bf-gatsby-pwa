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
  <div className="bg-brand w-screen h-24 flex items-center justify-center md:w-6/12 md:h-full md:py-10">
    <NestedProgressBar {...args} />
  </div>
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
      subNodes: [
        "Second-SubFirst",
        "Second-SubSecond",
        "Second-SubThird",
        "Second-SubFourth",
      ],
    },
    {
      title: "Third",
      subNodes: ["Third-SubFirst", "Third-SubSecond", "Third-SubThird"],
    },
  ],
} as NestedProgressBarProps
