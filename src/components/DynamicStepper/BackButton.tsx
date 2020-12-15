import * as React from "react"

import useStore from "../../hooks/useStore"

import { SecondaryButton, ButtonsPropsType } from "../Buttons"
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort"

const BackButton: React.FC<ButtonsPropsType> = ({ onClick }) => {
  const { boundGoBack } = useStore()

  return (
    <SecondaryButton label="Back" onClick={onClick ? onClick : boundGoBack}>
      <ArrowLeftShort />
    </SecondaryButton>
  )
}

export default BackButton
