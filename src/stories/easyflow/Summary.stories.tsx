import * as React from "react"

import Summary from "../../views/easyflow/steps/applicationSummary/Summary"
import StoreProvider from "../../store"

export default {
  title: "EasyFlow Steps/Summary",
  component: Summary,
}

const Template = (args: any) => (
  <StoreProvider>
    <Summary {...args} />
  </StoreProvider>
)

export const Default = Template.bind({})
