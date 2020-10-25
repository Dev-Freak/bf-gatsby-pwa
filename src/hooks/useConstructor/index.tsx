import * as React from "react"

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = React.useRef(false)
  if (hasBeenCalled.current) return 0
  callBack()
  hasBeenCalled.current = true
}

export default useConstructor
