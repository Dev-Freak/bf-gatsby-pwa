import * as React from "react"

import IncomeType from "../../views/easyflow/steps/assetFinancial/IncomeType"
import StoreProvider from "../../store"

export default {
  title: "EasyFlow Steps/IncomeType",
  component: IncomeType,
}

const Template = (args: any) => (
  <StoreProvider>
    <IncomeType {...args} />
  </StoreProvider>
)

export const Default = Template.bind({})
