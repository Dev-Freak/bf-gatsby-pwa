import useStore from "./useStore"

import { POSSIBLE_APPLICANTS } from "../utils/constants"

const useSummary = () => {
  const { state } = useStore()
  const { easyFlow } = state

  const components = Object.keys(easyFlow).map(key => {
    const data = easyFlow[key]

    const formatArray = (value: any) => {
      let objFromArr = {}

      value.forEach((item: any, index: number) => {
        objFromArr[POSSIBLE_APPLICANTS[index]] = { ...item }
      })

      return objFromArr
    }

    const trueValue = Array.isArray(data) ? formatArray(data) : easyFlow[key]

    return {
      itemTitle: key,
      value: trueValue,
    }
  })

  return components
}

export default useSummary
