import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Layout, { LayoutProps } from "../../components/Layout"

export default {
  title: "Shared/Layout",
  component: Layout,
} as Meta

const Template: Story<LayoutProps> = args => (
  <Layout {...args}>
    <h1>Testing...</h1>
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}
