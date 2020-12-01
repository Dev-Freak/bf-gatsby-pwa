import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StateProvider from "../../store/AppStore"
import ContactForm from "../../views/easyflow/steps/applicationSummary"

export default {
  title: "EasyFlow Steps/ContactForm",
  component: ContactForm,
} as Meta

const Template: Story = args => (
  <StateProvider>
    <ContactForm {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
