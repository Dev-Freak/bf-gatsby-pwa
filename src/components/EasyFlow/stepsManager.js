import * as React from "react"

// EASYFLOW STEPS
import Welcome from "./Welcome"
import ApplicationsSummary from "./ApplicationSummary"

// Residential
import ApplicantsQuantity from "./ApplicantsQuantity"
import ApplicationType from "./ApplicationType"
import ProjectType from "./ProjectType"
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

const mutateSteps = (keyName, value, currentSteps) => {
  console.log(keyName, value)
  switch (keyName) {
    case "path":
      return pathSteps(value)

    default:
      return currentSteps
  }
}

export { initialStep, mutateSteps }
