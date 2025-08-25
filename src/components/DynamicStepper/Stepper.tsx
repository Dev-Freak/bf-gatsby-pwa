import * as React from "react"

import SimpleProgressBar from "../SimpleProgressBar/SimpleProgressBar"
import StepperContainer from "./StepperContainer"

import useDynamicStepper from "../../hooks/useDynamicStepper"

export type StepperProps = {
  steps: Array<JSX.Element>
}

const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
  const { length, currentStep, currentElement } = useDynamicStepper(props.steps)

  return (
    <StepperContainer>
      <SimpleProgressBar length={length} currentNode={currentStep} />

      {React.cloneElement(currentElement as JSX.Element)}
    </StepperContainer>
  )
}

export default Stepper
