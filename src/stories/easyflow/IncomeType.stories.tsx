import * as React from "react"

import IncomeType from "../../views/easyflow/steps/assetFinancial/IncomeType"
import StateProvider from "../../store/AppStore"

export default {
  title: "EasyFlow Steps/IncomeType",
  component: IncomeType,
}

const Template = (args: any) => (
  <StateProvider>
    <IncomeType {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
