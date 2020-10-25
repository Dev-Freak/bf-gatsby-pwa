import * as React from "react"

import useStore from "../../hooks/useStore"

import { PrimaryButton } from "../Buttons"
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"

type PureProps = {
  isDisabled?: true | false
  onClick?: CallableFunction
}

function NextButton({ isDisabled, onClick }: PureProps): JSX.Element {
  const { boundGoNext } = useStore()

  return (
    <PrimaryButton
      label="Next"
      onClick={onClick ? onClick : boundGoNext}
      isDisabled={isDisabled}
    >
      <ArrowRightShort />
    </PrimaryButton>
  )
}

export default NextButton
