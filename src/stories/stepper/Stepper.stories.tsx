import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StateProvider from "../../store/AppStore"
import Welcome from "../../components/EasyFlow/Welcome"

// Residential
import ApplicantsQuantity from "../../components/EasyFlow/ApplicantsQuantity"
import ApplicationType from "../../components/EasyFlow/ApplicationType"
import ProjectType from "../../components/EasyFlow/ProjectType"
import ApplicantsIncomeTabs from "../../components/EasyFlow/ApplicantsIncome/ApplicantsIncomeTabs"
import ApplicationsSummary from "../../components/EasyFlow/ApplicationSummary"

// AssetsFinancial
import AssetType from "../../components/EasyFlow/AssetFinancial/AssetType"
import AssetPurchase from "../../components/EasyFlow/AssetFinancial/AssetPurchase"
import EmploymentType from "../../components/EasyFlow/AssetFinancial/EmploymentType"
import IncomeType from "../../components/EasyFlow/AssetFinancial/IncomeType"

// Commercial
import CommercialType from "../../components/EasyFlow/Commercial/CommercialType"
import ComProjectType from "../../components/EasyFlow/Commercial/ProjectType"
import DevelopmentType from "../../components/EasyFlow/Commercial/DevelopmentType"

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
