import useStore from "../useStore"

const useDynamicStepper = steps => {
  const { state } = useStore()

  const length = steps.length
  const currentStep = state?.currentStep
  const currentElement = steps[currentStep]

  return { length, currentStep, currentElement }
}

export default useDynamicStepper
