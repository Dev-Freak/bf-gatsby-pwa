import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import SubTitle, { SubTitleProps } from "../../components/Shared/SubTitle"

export default {
  title: "Shared/SubTitle",
  component: SubTitle,
} as Meta

const Template: Story<SubTitleProps> = args => <SubTitle {...args}>Path</SubTitle>

export const Default = Template.bind({})
Default.args = {}
