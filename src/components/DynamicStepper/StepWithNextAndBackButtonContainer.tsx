import * as React from "react"

import StepContainer from "./StepContainer"
import StepButtons from "./StepButtons"
import BackButton from "./BackButton"
import NextButton from "./NextButton"

const StepWithNextAndBackButtonContainer: React.FC = ({ children }) => {
  return (
    <StepContainer>
      {children}

      <StepButtons>
        <BackButton />
        <NextButton />
      </StepButtons>
    </StepContainer>
  )
}

export default StepWithNextAndBackButtonContainer
