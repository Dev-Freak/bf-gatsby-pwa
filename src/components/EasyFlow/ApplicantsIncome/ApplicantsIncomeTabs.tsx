import * as React from "react"

import StepHeader from "../../DynamicStepper/StepHeader"
import StepWithTabsContainer from "../../DynamicStepper/StepWithTabsContainer"

import Tabs from "../../Tab/Tabs"
import TitleWithTooltip from "../../Shared/TitleWithTooltip"
import Description from "../../Shared/Description"

import useApplicantsIncomeTabs from "../../../hooks/useApplicanstIncomeTabs"

const ApplicantsIncomeTabs: React.FC = () => {
  const {
    tabs,
    canStepBack,
    canStepNext,
    isNextStepDisabled,
    boundSetInnerStep,
  } = useApplicantsIncomeTabs()

  return (
    <StepWithTabsContainer
      onBack={canStepBack ? null : () => boundSetInnerStep(0)}
      onNext={canStepNext ? null : () => boundSetInnerStep(1)}
      isNextDisabled={isNextStepDisabled}
    >
      <StepHeader>
        <TitleWithTooltip title="income type">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <Tabs steps={tabs} />
    </StepWithTabsContainer>
  )
}

export default ApplicantsIncomeTabs
