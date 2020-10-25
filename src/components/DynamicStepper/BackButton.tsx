import * as React from "react"

import useStore from "../../hooks/useStore"

import { SecondaryButton } from "../Buttons"
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort"

type BackButtonType = {
  onClick?: CallableFunction
}

const BackButton: React.FC<BackButtonType> = ({ onClick }) => {
  const { boundGoBack } = useStore()

  return (
    <SecondaryButton label="Back" onClick={onClick ? onClick : boundGoBack}>
      <ArrowLeftShort />
    </SecondaryButton>
  )
}

export default BackButton
