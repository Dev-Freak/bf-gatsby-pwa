import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StoreProvider from "../../store"
import ContactForm from "../../views/easyflow/steps/applicationSummary"

export default {
  title: "EasyFlow Steps/ContactForm",
  component: ContactForm,
} as Meta

const Template: Story = args => (
  <StoreProvider>
    <ContactForm {...args} />
  </StoreProvider>
)

export const Default = Template.bind({})
