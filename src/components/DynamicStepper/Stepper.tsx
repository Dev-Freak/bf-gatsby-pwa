import * as React from "react"

import SimpleProgressBar from "../SimpleProgressBar/SimpleProgressBar"
import StepperContainer from "./StepperContainer"

import useDynamicStepper from "../../hooks/useDynamicStepper"

export type StepsType = Array<JSX.Element>
export type StepperProps = {
  steps: StepsType
}

const Stepper: React.FC<StepperProps> = props => {
  const { length, currentStep, currentElement } = useDynamicStepper(props.steps)

  return (
    <StepperContainer>
      <SimpleProgressBar length={length} currentNode={currentStep} />

      {React.cloneElement(currentElement as JSX.Element)}
    </StepperContainer>
  )
}

export default Stepper
