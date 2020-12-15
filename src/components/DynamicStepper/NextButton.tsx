import * as React from "react"

import useStore from "../../hooks/useStore"

import { PrimaryButton, ButtonsPropsType } from "../Buttons"
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"

const NextButton: React.FC<ButtonsPropsType> = ({ isDisabled, onClick }) => {
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
