import * as React from "react"

// EASYFLOW STEPS
import Welcome, { PathOptions } from "./steps/Welcome"
import ApplicationsSummary from "./steps/applicationSummary"

// Residential
import ApplicantsQuantity from "./steps/residential/ApplicantsQuantity"
import ApplicationType from "./steps/residential/ApplicationType"
import ProjectType, { ProjectOptions } from "./steps/residential/ProjectType"
import ConstructionType from "./steps/residential/ConstructionType"
import ApplicantsIncomeTabs from "./steps/residential/applicantsIncome/ApplicantsIncomeTabs"

// AssetsFinancial
import AssetType from "./steps/assetFinancial/AssetType"
import AssetPurchase from "./steps/assetFinancial/AssetPurchase"
import EmploymentType from "./steps/assetFinancial/EmploymentType"
import IncomeType, { IncomeOptions } from "./steps/assetFinancial/IncomeType"

// Commercial
import CommercialType from "./steps/commercial/CommercialType"

// Other Financial Enquiries
import OtherFinancialType from "./steps/otherFinancialEnquiries/OtherFinancialType"

const initialStep = [<Welcome />]
const finalSteps = [<OtherFinancialType />, <ApplicationsSummary />]
const AssetFinancialSteps = [
  ...initialStep,
  <AssetType />,
  <AssetPurchase />,
  <IncomeType />,
  ...finalSteps,
]
const ResidentialSteps = [
  ...initialStep,
  <ApplicantsQuantity />,
  <ApplicationType />,
  <ProjectType />,
  <ApplicantsIncomeTabs />,
  ...finalSteps,
]
const CommercialSteps = [...initialStep, <CommercialType />, ...finalSteps]

const pathSteps = value => {
  switch (value) {
    case PathOptions[0]:
      return AssetFinancialSteps

    case PathOptions[1]:
      return ResidentialSteps

    case PathOptions[2]:
      return CommercialSteps

    default:
      const pathCopy = [...finalSteps]
      return [...initialStep, ...pathCopy.reverse().slice(0, 1)]
  }
}

const projectSteps = value => {
  switch (value) {
    case ProjectOptions[1]:
      let stepsCopy = [...ResidentialSteps]
      return [...stepsCopy.slice(0, 4), <ConstructionType />, ...stepsCopy.slice(4)]

    default:
      return ResidentialSteps
  }
}

const assetIncomeSteps = value => {
  switch (value) {
    case IncomeOptions[0]:
      let stepsCopy = [...AssetFinancialSteps]
      return [...stepsCopy.slice(0, 4), <EmploymentType />, ...stepsCopy.slice(4)]

    default:
      return AssetFinancialSteps
  }
}

const mutateSteps = (keyName, value, currentSteps) => {
  switch (keyName) {
    case "path":
      return pathSteps(value)

    case "project_type":
      return projectSteps(value)

    case "asset_income_type":
      return assetIncomeSteps(value)

    default:
      return currentSteps
  }
}

export { initialStep, mutateSteps }
