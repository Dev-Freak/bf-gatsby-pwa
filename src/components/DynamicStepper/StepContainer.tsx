import * as React from "react"

import StepButtons from "./StepButtons"
import BackButton, { BackButtonProps } from "./BackButton"
import NextButton, { NextButtonProps } from "./NextButton"

type Props = {
  back?: BackButtonProps | true
  next?: NextButtonProps | true
}

const StepContainer: React.FC<Props> = ({ children, back, next }) => {
  return (
    <div className="max-w-4xl w-10/12 flex flex-col justify-center items-center space-y-10">
      {children}

      {(next || back) && (
        <StepButtons>
          {back && <BackButton {...(back as BackButtonProps)} />}
          {next && <NextButton {...(next as NextButtonProps)} />}
        </StepButtons>
      )}
    </div>
  )
}

export default StepContainer
