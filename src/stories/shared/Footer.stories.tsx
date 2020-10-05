import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Footer, { FooterProps } from "../../components/Footer"

export default {
  title: "Shared/Footer",
  component: Footer,
} as Meta

const Template: Story<FooterProps> = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}
