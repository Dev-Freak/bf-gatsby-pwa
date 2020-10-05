import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Description, { DescriptionProps } from "../../components/Shared/Description"

export default {
  title: "Shared/Description",
  component: Description,
} as Meta

const Template: Story<DescriptionProps> = args => (
  <Description {...args}>
    Please select the most relevant option to your needs
  </Description>
)

export const Default = Template.bind({})
Default.args = {}
