import * as React from "react"
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"
import { ReportSVG } from "../utils/icons"

import TitleWithTooltip from "./Shared/TitleWithTooltip"
import { PrimaryButton, SecondaryButton } from "./Buttons"
import StepButtons from "./DynamicStepper/StepButtons"

import useFinishEasyFlow from "../hooks/useFinishEasyFlow"

const FinishEasyFlow: React.FC = () => {
  const { boundStartFactFind } = useFinishEasyFlow()

  return (
    <div className="flex flex-col items-center justify-center w-11/12 m-auto space-y-reverse space-y-8 lg:flex-row lg:space-y-0 lg:w-8/12 lg:space-x-20">
      <div className="flex flex-col flex-1 order-last items-start justify-center space-y-4 md:space-y-6 lg:order-first">
        <TitleWithTooltip title="Welcome to the final step">
          Tooltip for title
        </TitleWithTooltip>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
          porttitor rhoncus dolor purus non enim. Lectus sit amet est placerat in
          egestas erat imperdiet sed.
          <br />
          Donec enim diam vulputate ut pharetra sit amet. Magna fringilla urna
          porttitor rhoncus dolor purus non enim. Fames ac turpis egestas sed tempus
          urna.
        </p>

        <StepButtons>
          <SecondaryButton
            label={"Finish"}
            onClick={() => window.location.replace("https://borgfinancial.com.au")}
          >
            <ArrowRightShort />
          </SecondaryButton>

          <PrimaryButton label={"Proceed"} onClick={() => boundStartFactFind()}>
            <ArrowRightShort />
          </PrimaryButton>
        </StepButtons>
      </div>
      <div className="flex flex-1 order-first lg:order-last">
        <img src={ReportSVG} alt="Report SVG" />
      </div>
    </div>
  )
}

export default FinishEasyFlow
