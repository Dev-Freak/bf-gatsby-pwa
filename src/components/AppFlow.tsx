import * as React from "react"

import useStore from "../hooks/useStore"

import EasyFlow from "./EasyFlow"
import FinishEasyFlow from "./FinishEasyFlow"

const AppFlow: React.FC = () => {
  const {
    state: { isEasyFlowFinished, isFactFindInterested, isFactFindFinished },
  } = useStore()

  return (
    <React.Fragment>
      {isFactFindFinished && "Fact Find Finished"}
      {isEasyFlowFinished && !isFactFindInterested && <FinishEasyFlow />}
      {isFactFindInterested && !isFactFindFinished && "Fact Find"}
      {!isEasyFlowFinished && !isFactFindInterested && !isFactFindFinished && (
        <EasyFlow />
      )}
    </React.Fragment>
  )
}

export default AppFlow
