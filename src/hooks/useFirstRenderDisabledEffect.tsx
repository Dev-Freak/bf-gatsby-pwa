import * as React from "react"

const useFirstRenderDisabledEffect = () => {
  const firstRender = React.useRef(true)

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
  })

  return firstRender.current
}

export default useFirstRenderDisabledEffect
