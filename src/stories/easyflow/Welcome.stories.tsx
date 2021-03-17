import * as React from "react"

import Welcome from "../../views/easyflow/steps/Welcome"
import StoreProvider from "../../store"

export default {
  title: "EasyFlow Steps/Welcome",
  component: Welcome,
}

const Template = (args: any) => (
  <StoreProvider>
    <Welcome {...args} />
  </StoreProvider>
)

export const Default = Template.bind({})
