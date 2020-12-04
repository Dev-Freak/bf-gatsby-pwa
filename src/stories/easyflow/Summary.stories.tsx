import * as React from "react"

import Summary from "../../views/easyflow/steps/applicationSummary/Summary"
import StateProvider from "../../store/AppStore"

export default {
  title: "EasyFlow Steps/Summary",
  component: Summary,
}

const Template = (args: any) => (
  <StateProvider>
    <Summary {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
