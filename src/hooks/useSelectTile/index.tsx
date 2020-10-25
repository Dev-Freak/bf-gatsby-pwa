import _ from "lodash"
import useStore from "../useStore"

const useSelectTile = (
  keyName: string,
  value: string,
  onClick: CallableFunction
) => {
  const { state, boundSelectTile, boundGoNext } = useStore()

  const { easyFlow } = state
  const isTileSelected = _.get(easyFlow, keyName) === value

  const handleSelectTile = () => {
    boundSelectTile({ keyName, value })

    if (onClick) {
      onClick(value)
    }

    setTimeout(() => {
      boundGoNext()
    }, 500)
  }

  return { isTileSelected, handleSelectTile }
}

export default useSelectTile
