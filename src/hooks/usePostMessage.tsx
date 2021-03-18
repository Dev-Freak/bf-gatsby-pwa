import * as React from "react"
import _ from "lodash"

const usePostMessage = (url: String) => {
  const originEvent = React.useRef<any | undefined>(null)

  React.useEffect(() => {
    const crossOriginConnection = () => {
      console.log("crossOriginConnection")

      window.addEventListener(
        "message",
        (event: any) => {
          console.log("EventListener::message")
          console.log(event)
          if (!event.origin.startsWith(url) || event.data !== "CORS") return

          originEvent.current = _.cloneDeep(event)
        },
        false
      )
    }

    if (originEvent.current === null) crossOriginConnection()
  }, [])

  const sendMessage = React.useCallback(() => {
    console.log(originEvent.current)
    console.log(
      `window.innerHeight: ${window.innerHeight}, window.innerWidth: ${window.innerWidth}`
    )

    originEvent.current?.source[0]?.postMessage(
      {
        height: window.innerHeight,
        width: window.innerWidth,
      },
      originEvent.current.origin
    )
  }, [originEvent.current])

  return { sendMessage }
}

export default usePostMessage
