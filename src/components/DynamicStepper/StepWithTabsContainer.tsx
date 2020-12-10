import * as React from "react"

import StepContainer from "./StepContainer"
import StepButtons from "./StepButtons"
import BackButton from "./BackButton"
import NextButton from "./NextButton"

export type PureProps = {
  isNextDisabled?: true | false
  onBack?: CallableFunction
  onNext?: CallableFunction
}

const StepWithTabsContainer: React.FC<PureProps> = ({
  children,
  isNextDisabled,
  onBack,
  onNext,
}) => {
  return (
    <StepContainer>
      {children}

      <StepButtons>
        <BackButton onClick={onBack} />
        <NextButton onClick={onNext} isDisabled={isNextDisabled} />
      </StepButtons>
    </StepContainer>
  )
}

export default StepWithTabsContainer
