import * as React from "react"

// EASYFLOW STEPS
import Welcome from "./steps/Welcome"
import ApplicationsSummary from "./steps/applicationSummary"

// Residential
import ApplicantsQuantity from "./steps/residential/ApplicantsQuantity"
import ApplicationType from "./steps/residential/ApplicationType"
import ProjectType from "./steps/residential/ProjectType"
import ApplicantsIncomeTabs from "./steps/residential/applicantsIncome/ApplicantsIncomeTabs"

// AssetsFinancial
import AssetType from "./steps/assetFinancial/AssetType"
import AssetPurchase from "./steps/assetFinancial/AssetPurchase"
import EmploymentType from "./steps/assetFinancial/EmploymentType"
import IncomeType from "./steps/assetFinancial/IncomeType"

// Commercial
import CommercialType from "./steps/commercial/CommercialType"

// Other Financial Enquiries
import OtherFinancialType from "./steps/otherFinancialEnquiries/OtherFinancialType"

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
  <ApplicantsIncomeTabs />,
  <ApplicationsSummary />,
]
const CommercialSteps = [<Welcome />, <CommercialType />, <ApplicationsSummary />]

const pathSteps = value => {
  switch (value) {
    case "Asset financial":
      return AssetFinancialSteps

    case "Residential":
      return ResidentialSteps

    case "Commercial":
      return CommercialSteps

    default:
      return [<Welcome />, <OtherFinancialType />, <ApplicationsSummary />]
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
  console.log("Mutating")

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
