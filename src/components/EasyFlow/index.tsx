import * as React from "react"

import Stepper, { StepperProps } from "../DynamicStepper/Stepper"

import useStore from "../../hooks/useStore"

const EasyFlow: React.FC = () => {
  const {
    state: { easyFlowSteps },
  } = useStore()

  return <Stepper {...easyFlowSteps} />
}

export default EasyFlow
