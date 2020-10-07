import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import MainItem, { MainItemProps } from "../../components/NestedProgressBar/MainItem"

import MainLabel from "../../components/NestedProgressBar/MainLabel"
import MainNode from "../../components/NestedProgressBar/MainNode"

export default {
  title: "Nested Progress Bar/MainItem",
  component: MainItem,
} as Meta

const Template: Story<MainItemProps> = args => (
  <div className="bg-brand w-40 h-20 flex items-center justify-center">
    <MainItem>
      <MainNode {...args} />
      <MainLabel>Applicants</MainLabel>
    </MainItem>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  isActive: true,
  isCompleted: false,
}
