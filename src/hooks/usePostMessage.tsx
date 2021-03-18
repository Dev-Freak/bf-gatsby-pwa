import * as React from "react"
import _ from "lodash"

const usePostMessage = (url: String) => {
  const [originEvent, setOriginEvent] = React.useState<any | undefined>(null)

  React.useEffect(() => {
    const crossOriginConnection = () => {
      console.log("crossOriginConnection")

      window.addEventListener(
        "message",
        (event: any) => {
          console.log("EventListener::message")
          console.log(event)
          if (!event.origin.startsWith(url) || event.data !== "CORS") return

          setOriginEvent(event)
        },
        false
      )
    }

    if (originEvent === null) crossOriginConnection()
  }, [])

  const sendMessage = React.useCallback(() => {
    console.log(originEvent)
    console.log(
      `window.innerHeight: ${window.innerHeight}, window.innerWidth: ${window.innerWidth}`
    )

    originEvent?.source[0]?.postMessage(
      {
        height: window.innerHeight,
        width: window.innerWidth,
      },
      originEvent.origin
    )
  }, [originEvent])

  return { sendMessage }
}

export default usePostMessage
