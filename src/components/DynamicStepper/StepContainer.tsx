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
  const containerRef = React.useRef<any>(null)

  React.useEffect(() => {
    if (containerRef.current !== null) {
      console.log("sendMessage", {
        height: containerRef.current?.offsetHeight,
        width: containerRef.current?.offsetWidth,
      })

      sendMessage({
        height: containerRef.current?.offsetHeight,
        width: containerRef.current?.offsetWidth,
      })
    }
  }, [])

  return (
    <div
      id="step-container"
      ref={containerRef}
      className="max-w-4xl w-full flex flex-col items-center space-y-10 sm:w-10/12"
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
