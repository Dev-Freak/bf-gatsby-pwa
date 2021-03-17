import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StoreProvider from "../../store"
import Welcome from "../../views/easyflow/steps/Welcome"

// Residential
import ApplicantsQuantity from "../../views/easyflow/steps/residential/ApplicantsQuantity"
import ApplicationType from "../../views/easyflow/steps/residential/ApplicationType"
import ProjectType from "../../views/easyflow/steps/residential/ProjectType"
import ApplicantsIncomeTabs from "../../views/easyflow/steps/residential/applicantsIncome/ApplicantsIncomeTabs"
import ApplicationsSummary from "../../views/easyflow/steps/applicationSummary"

// AssetsFinancial
import AssetType from "../../views/easyflow/steps/assetFinancial/AssetType"
import AssetPurchase from "../../views/easyflow/steps/assetFinancial/AssetPurchase"
import EmploymentType from "../../views/easyflow/steps/assetFinancial/EmploymentType"
import IncomeType from "../../views/easyflow/steps/assetFinancial/IncomeType"

// Commercial
import CommercialType from "../../views/easyflow/steps/commercial/CommercialType"
import ComProjectType from "../../views/easyflow/steps/commercial/ProjectType"
import DevelopmentType from "../../views/easyflow/steps/commercial/DevelopmentType"

import Stepper, { StepperProps } from "../../components/DynamicStepper/Stepper"

export default {
  title: "Stepper/EasyFlow Stepper",
  componenet: Stepper,
} as Meta

const Template: Story<StepperProps> = args => (
  <StoreProvider>
    <Stepper {...args} />
  </StoreProvider>
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
