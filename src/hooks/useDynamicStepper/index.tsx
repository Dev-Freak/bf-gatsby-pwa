import * as React from "react"

import { Store } from "../../store/AppStore"

const useDynamicStepper = steps => {
  const { state } = React.useContext(Store)

  const length = steps.length
  const currentStep = state?.easyFlow?.currentStep
  const currentElement = steps[currentStep]

  return { length, currentStep, currentElement }
}

export default useDynamicStepper
