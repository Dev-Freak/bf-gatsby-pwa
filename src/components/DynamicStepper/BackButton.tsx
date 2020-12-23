import * as React from "react"

import { SecondaryButton, SecondaryButtonProps } from "../Buttons"
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort"
import { Override } from "../../utils/types"

import useStore from "../../hooks/useStore"

export type BackButtonProps = Override<SecondaryButtonProps, { label?: string }>

const BackButton: React.FC<BackButtonProps> = ({ label, onClick, ...rest }) => {
  const { boundGoBack } = useStore()

  return (
    <SecondaryButton
      label={label ?? "Back"}
      onClick={onClick ? onClick : boundGoBack}
      {...rest}
    >
      <ArrowLeftShort />
    </SecondaryButton>
  )
}

export default BackButton
