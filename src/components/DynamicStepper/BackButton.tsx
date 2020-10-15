import * as React from "react"

import useGoBack from "../../hooks/useGoBack"

import { SecondaryButton } from "../Buttons"
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort"

const BackButton: React.FC = () => {
  const { boundGoBack } = useGoBack()

  return (
    <SecondaryButton label="Back" onClick={() => boundGoBack()}>
      <ArrowLeftShort />
    </SecondaryButton>
  )
}

export default BackButton
