import useStore from "../useStore"
import { StepsType } from "../../components/DynamicStepper/Stepper"

const useDynamicStepper = (steps: StepsType) => {
  const { state } = useStore()

  const length = steps.length
  const currentStep = state?.currentStep
  const currentElement = steps[currentStep]

  return { length, currentStep, currentElement }
}

export default useDynamicStepper
