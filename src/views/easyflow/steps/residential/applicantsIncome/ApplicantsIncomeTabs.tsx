import * as React from "react"

import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepWithTabsContainer from "../../../../../components/DynamicStepper/StepWithTabsContainer"

import Tabs from "../../../../../components/Tab/Tabs"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"

import useApplicantsIncomeTabs from "../../../../../hooks/useApplicanstIncomeTabs"

const ApplicantsIncomeTabs: React.FC = () => {
  const {
    tabs,
    activeTab,
    canStepBack,
    canStepNext,
    isNextStepDisabled,
    boundSetTab,
    boundSetInnerStep,
  } = useApplicantsIncomeTabs()

  return (
    <StepWithTabsContainer
      onBack={canStepBack ? undefined : () => boundSetInnerStep(0)}
      onNext={canStepNext ? undefined : () => boundSetInnerStep(1)}
      isNextDisabled={isNextStepDisabled}
    >
      <StepHeader>
        <TitleWithTooltip title="income type">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <Tabs steps={tabs} defaultActiveIndex={activeTab} onTabChange={boundSetTab} />
    </StepWithTabsContainer>
  )
}

export default ApplicantsIncomeTabs
