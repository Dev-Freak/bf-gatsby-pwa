import * as React from "react"

// EASYFLOW STEPS
import Welcome from "./steps/Welcome"
import ApplicationsSummary from "./steps/applicationSummary"

// Residential
import ApplicantsQuantity from "./steps/residential/ApplicantsQuantity"
import ApplicationType from "./steps/residential/ApplicationType"
import ProjectType from "./steps/residential/ProjectType"
import SMSFType from "./steps/residential/SMSFType"
import ApplicantsIncomeTabs from "./steps/residential/applicantsIncome/ApplicantsIncomeTabs"

// AssetsFinancial
import AssetType from "./steps/assetFinancial/AssetType"
import AssetPurchase from "./steps/assetFinancial/AssetPurchase"
import EmploymentType from "./steps/assetFinancial/EmploymentType"
import IncomeType from "./steps/assetFinancial/IncomeType"

// Commercial
import CommercialType from "./steps/commercial/CommercialType"
import ComProjectType from "./steps/commercial/ProjectType"
import DevelopmentType from "./steps/commercial/DevelopmentType"

const initialStep = [<Welcome />]
const AssetFinancialSteps = [
  <Welcome />,
  <AssetType />,
  <AssetPurchase />,
  <IncomeType />,
  <EmploymentType />,
  <ApplicationsSummary />,
]
const ResidentialSteps = [
  <Welcome />,
  <ApplicantsQuantity />,
  <ApplicationType />,
  <ProjectType />,
  <SMSFType />,
  <ApplicantsIncomeTabs />,
  <ApplicationsSummary />,
]
const CommercialSteps = [
  <Welcome />,
  <CommercialType />,
  <ComProjectType />,
  <DevelopmentType />,
  <ApplicationsSummary />,
]

const pathSteps = value => {
  switch (value) {
    case "Residential":
      return ResidentialSteps

    case "Commercial":
      return CommercialSteps

    case "Asset financial":
      return AssetFinancialSteps

    default:
      return [<Welcome />, <ApplicationsSummary />]
  }
}

const projectSteps = value => {
  let stepsCopy = []

  switch (value) {
    case "SMSF":
      return ResidentialSteps

    default:
      stepsCopy = [...ResidentialSteps]
      stepsCopy.splice(4, 1)
      return stepsCopy
  }
}

const assetIncomeSteps = value => {
  let stepsCopy = []

  switch (value) {
    case "PAYG Employed (Payslips)":
      return AssetFinancialSteps

    default:
      stepsCopy = [...AssetFinancialSteps]
      stepsCopy.splice(3, 1)
      return stepsCopy
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
