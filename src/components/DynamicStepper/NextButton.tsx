import * as React from "react"

import { PrimaryButton, PrimaryButtonProps } from "../Buttons"
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"
import { Override } from "../../utils/types"

import useStore from "../../hooks/useStore"

export type NextButtonProps = Override<PrimaryButtonProps, { label?: string }>

const NextButton: React.FC<NextButtonProps> = ({ label, onClick, ...rest }) => {
  const { boundGoNext } = useStore()

  return (
    <PrimaryButton
      label={label ?? "Next"}
      onClick={onClick ? onClick : boundGoNext}
      {...rest}
    >
      <ArrowRightShort />
    </PrimaryButton>
  )
}

export default NextButton
