import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Title, { TitleProps } from "../../components/Shared/Title"

export default {
  title: "Shared/Title",
  component: Title,
} as Meta

const Template: Story<TitleProps> = args => <Title {...args}>Welcome</Title>

export const Default = Template.bind({})
Default.args = {}
