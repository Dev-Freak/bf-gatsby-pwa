import * as React from "react"

import StepContainer from "./StepContainer"
import StepButtons from "./StepButtons"
import BackButton from "./BackButton"
import NextButton from "./NextButton"

type ButtonProps = {
  isDisabled?: true | false
  onClick?: CallableFunction
}

type Props = {
  back?: ButtonProps
  next?: ButtonProps
}

const StepWithNextAndBackButtonContainer: React.FC<Props> = ({
  children,
  back,
  next,
}) => {
  /*  TODO
      <StepWithNextAndBackButtonContainer> SHOULD be refactored to be the only step container
      Buttons rendered conditionally based on props: { next, back }
      { next: {}, back: {} } holds the props to be passed down to each button
  */

  return (
    <StepContainer>
      {children}

      <StepButtons>
        <BackButton {...back} />
        <NextButton {...next} />
      </StepButtons>
    </StepContainer>
  )
}

export default StepWithNextAndBackButtonContainer
