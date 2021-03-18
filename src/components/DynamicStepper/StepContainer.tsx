import * as React from "react"

import StepButtons from "./StepButtons"
import BackButton, { BackButtonProps } from "./BackButton"
import NextButton, { NextButtonProps } from "./NextButton"

import { PostMessageContext } from "../AppFlow"

type Props = {
  back?: BackButtonProps | true
  next?: NextButtonProps | true
}

const StepContainer: React.FC<Props> = ({ children, back, next }) => {
  const { sendMessage } = React.useContext(PostMessageContext)

  React.useEffect(() => {
    const stepContainer: any = document.getElementById("step-container")

    sendMessage({
      height: stepContainer.offsetHeight,
      width: stepContainer.offsetWidth,
    })
  }, [])

  return (
    <div
      id="step-container"
      className="max-w-4xl w-10/12 flex flex-col justify-center items-center space-y-10"
    >
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
