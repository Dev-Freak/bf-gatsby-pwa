import _ from "lodash"
import useStore from "../useStore"

const useToggleTile = (keyName: string, value: string, isMultiple: true | false) => {
  const { state, boundToggleTile } = useStore()

  const { easyFlow } = state

  const trimKeyName =
    isMultiple && keyName.includes("[]") ? keyName?.replace("[]", "") : null

  const tileValue = _.get(easyFlow, trimKeyName ?? keyName)

  const isTileToggled = tileValue?.includes(value) ?? false
  const tileValueIndex = isTileToggled ? tileValue.indexOf(value) : null
  const isDisabled =
    tileValue !== undefined && !isTileToggled && tileValue?.length !== 0

  const handleToggleTile = () =>
    trimKeyName
      ? boundToggleTile({
          keyName: `${trimKeyName}${isTileToggled ? `[${tileValueIndex}]` : "[]"}`,
          value,
        })
      : boundToggleTile({
          keyName,
          value,
        })

  return { isTileToggled, isDisabled, handleToggleTile }
}

export default useToggleTile
