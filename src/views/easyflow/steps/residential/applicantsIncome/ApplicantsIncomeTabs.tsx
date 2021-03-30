import * as React from "react"

import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../../components/DynamicStepper/StepContainer"

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

  React.useEffect(() => {
    boundSetTab(0)
  }, [])

  return (
    /*
      canStepBack and canStepNext work as a boolean to set custom behaviour.
      If any of them is true, the default button's onClick function will take place,
      otherwise, the Store's action will be binded to the onClick event
    */

    <StepContainer
      back={{
        onClick: canStepBack ? undefined : () => boundSetInnerStep(0),
      }}
      next={{
        onClick: canStepNext ? undefined : () => boundSetInnerStep(1),
        isDisabled: isNextStepDisabled,
      }}
    >
      <StepHeader>
        <TitleWithTooltip title="Type of Income">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <Tabs steps={tabs} defaultActiveIndex={activeTab} onTabChange={boundSetTab} />
    </StepContainer>
  )
}

export default ApplicantsIncomeTabs
