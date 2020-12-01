import * as React from "react"

import Welcome from "../../views/easyflow/steps/Welcome"
import StateProvider from "../../store/AppStore"

export default {
  title: "EasyFlow Steps/Welcome",
  component: Welcome,
}

const Template = args => (
  <StateProvider>
    <Welcome {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
