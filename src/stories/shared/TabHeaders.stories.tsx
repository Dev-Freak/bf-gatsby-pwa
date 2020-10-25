import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import TabHeader, { TabHeaderProps } from "../../components/Tab/TabHeader"

export default {
  title: "Shared/TabHeader",
  component: TabHeader,
} as Meta

const Template: Story<TabHeaderProps> = args => (
  <TabHeader {...args}>Primary Applicant</TabHeader>
)

export const Default = Template.bind({})
Default.args = {}

export const Active = Template.bind({})
Active.args = {
  isActive: true,
}
