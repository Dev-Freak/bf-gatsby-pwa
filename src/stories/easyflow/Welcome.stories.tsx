import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Welcome from "../../components/EasyFlow/Welcome"

export default {
  title: "EasyFlow Steps/Welcome",
  component: Welcome,
} as Meta

const Template: Story = args => <Welcome {...args} />

export const Default = Template.bind({})
