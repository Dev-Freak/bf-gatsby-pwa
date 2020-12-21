import * as React from "react"

import Stepper, { StepperProps } from "../../components/DynamicStepper/Stepper"

import useStore from "../../hooks/useStore"

const EasyFlow: React.FC = () => {
  const {
    state: { easyFlowSteps },
  } = useStore()

  return <Stepper {...(easyFlowSteps as StepperProps)} />
}

export default EasyFlow
