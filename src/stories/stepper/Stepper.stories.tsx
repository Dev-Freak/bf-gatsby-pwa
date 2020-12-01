import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StateProvider from "../../store/AppStore"
import Welcome from "../../views/easyflow/steps/Welcome"

// Residential
import ApplicantsQuantity from "../../views/easyflow/ApplicantsQuantity"
import ApplicationType from "../../views/easyflow/ApplicationType"
import ProjectType from "../../views/easyflow/ProjectType"
import ApplicantsIncomeTabs from "../../views/easyflow/steps/residential/applicantsIncome/ApplicantsIncomeTabs"
import ApplicationsSummary from "../../views/easyflow/ApplicationSummary"

// AssetsFinancial
import AssetType from "../../views/easyflow/AssetFinancial/AssetType"
import AssetPurchase from "../../views/easyflow/AssetFinancial/AssetPurchase"
import EmploymentType from "../../views/easyflow/AssetFinancial/EmploymentType"
import IncomeType from "../../views/easyflow/AssetFinancial/IncomeType"

// Commercial
import CommercialType from "../../views/easyflow/Commercial/CommercialType"
import ComProjectType from "../../views/easyflow/Commercial/ProjectType"
import DevelopmentType from "../../views/easyflow/Commercial/DevelopmentType"

import Stepper, { StepperProps } from "../../components/DynamicStepper/Stepper"

export default {
  title: "Stepper/EasyFlow Stepper",
  componenet: Stepper,
} as Meta

const Template: Story<StepperProps> = args => (
  <StateProvider>
    <Stepper {...args} />
  </StateProvider>
)

export const Residential = Template.bind({})
Residential.args = {
  steps: [
    <Welcome />,
    <ApplicantsQuantity />,
    <ApplicationType />,
    <ProjectType />,
    <ApplicantsIncomeTabs />,
    <ApplicationsSummary />,
  ],
}

export const AssetsFinancial = Template.bind({})
AssetsFinancial.args = {
  steps: [
    <Welcome />,
    <AssetType />,
    <AssetPurchase />,
    <IncomeType />,
    <EmploymentType />,
  ],
}

export const Commercial = Template.bind({})
Commercial.args = {
  steps: [<Welcome />, <CommercialType />, <ComProjectType />, <DevelopmentType />],
}
