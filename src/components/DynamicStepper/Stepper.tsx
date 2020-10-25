import * as React from "react"

import SimpleProgressBar from "../SimpleProgressBar/SimpleProgressBar"
import StepperContainer from "./StepperContainer"

import useDynamicStepper from "../../hooks/useDynamicStepper"

export type StepperProps = {
  steps: Array<React.ReactElement>
}

const Stepper: React.FC<StepperProps> = ({ steps }: StepperProps) => {
  const { length, currentStep, currentElement } = useDynamicStepper(steps)

  return (
    <StepperContainer>
      <SimpleProgressBar length={length} currentNode={currentStep} />

      {React.cloneElement(currentElement as React.ReactElement)}
    </StepperContainer>
  )
}

export default Stepper
