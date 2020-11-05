import useStore from "./useStore"

const useFinishEasyFlow = () => {
  const {
    state: { isEasyFlowFinished },
    boundStartFactFind,
  } = useStore()

  return {
    isEasyFlowFinished,
    boundStartFactFind,
  }
}

export default useFinishEasyFlow
