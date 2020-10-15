import * as React from "react"

import StepContainer from "../Shared/StepContainer"
import BackButton from "./BackButton"

const StepWithBackButtonContainer: React.FC = ({ children }) => {
  return (
    <StepContainer>
      {children}

      <BackButton />
    </StepContainer>
  )
}

export default StepWithBackButtonContainer
