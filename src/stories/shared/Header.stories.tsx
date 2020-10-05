import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Header, { HeaderProps } from "../../components/Header"

export default {
  title: "Shared/Header",
  component: Header,
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
