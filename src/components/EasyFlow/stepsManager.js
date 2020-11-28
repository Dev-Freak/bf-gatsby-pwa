import * as React from "react"

// EASYFLOW STEPS
import Welcome from "./Welcome"
import ApplicationsSummary from "./ApplicationSummary"

// Residential
import ApplicantsQuantity from "./ApplicantsQuantity"
import ApplicationType from "./ApplicationType"
import ProjectType from "./ProjectType"
import SMSFType from "./SMSFType"
import ApplicantsIncomeTabs from "./ApplicantsIncome/ApplicantsIncomeTabs"

// AssetsFinancial
import AssetType from "./AssetFinancial/AssetType"
import AssetPurchase from "./AssetFinancial/AssetPurchase"
import EmploymentType from "./AssetFinancial/EmploymentType"
import IncomeType from "./AssetFinancial/IncomeType"

// Commercial
import CommercialType from "./Commercial/CommercialType"
import ComProjectType from "./Commercial/ProjectType"
import DevelopmentType from "./Commercial/DevelopmentType"

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
