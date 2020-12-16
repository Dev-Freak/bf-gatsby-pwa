import * as React from "react"

// EASYFLOW STEPS
import Welcome from "./steps/Welcome"
import ApplicationsSummary from "./steps/applicationSummary"

// Residential
import ApplicantsQuantity from "./steps/residential/ApplicantsQuantity"
import ApplicationType from "./steps/residential/ApplicationType"
import ProjectType from "./steps/residential/ProjectType"
import ConstructionType from "./steps/residential/ConstructionType"
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
  switch (value) {
    case "Construction":
      let stepsCopy = [...ResidentialSteps]
      return [...stepsCopy.slice(0, 4), <ConstructionType />, ...stepsCopy.slice(4)]

    default:
      return ResidentialSteps
  }
}

const assetIncomeSteps = value => {
  switch (value) {
    case "PAYG Employed (Payslips)":
      let stepsCopy = [...AssetFinancialSteps]
      return [...stepsCopy.slice(0, 4), <EmploymentType />, stepsCopy.reverse()[0]]

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
