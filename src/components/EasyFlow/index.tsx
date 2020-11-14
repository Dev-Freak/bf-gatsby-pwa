import * as React from "react"

import Welcome from "./Welcome"
import ApplicantsQuantity from "./ApplicantsQuantity"
import ApplicationType from "./ApplicationType"
import ProjectType from "./ProjectType"
import ApplicantsIncomeTabs from "./ApplicantsIncome/ApplicantsIncomeTabs"
import ApplicationsSummary from "./ApplicationSummary"

import Stepper, { StepperProps } from "../DynamicStepper/Stepper"

import useStore from "../../hooks/useStore"

const props = {
  steps: [
    <Welcome />,
    <ApplicantsQuantity />,
    <ApplicationType />,
    <ProjectType />,
    <ApplicantsIncomeTabs />,
    <ApplicationsSummary />,
  ],
} as StepperProps

const EasyFlow: React.FC = () => {
  const {
    state: { easyFlowSteps },
  } = useStore()

  return <Stepper {...easyFlowSteps} />
}

export default EasyFlow
