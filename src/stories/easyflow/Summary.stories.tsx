import * as React from "react"

import Summary from "../../components/EasyFlow/ApplicationSummary/Summary"
import StateProvider from "../../store/AppStore"

export default {
  title: "EasyFlow Steps/Summary",
  component: Summary,
}

const Template = args => (
  <StateProvider>
    <Summary {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
