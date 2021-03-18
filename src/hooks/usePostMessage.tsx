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

  const sendMessage = React.useCallback(
    container => {
      console.log(originEvent)
      console.log(
        `container.innerHeight: ${container.innerHeight}, container.innerWidth: ${container.innerWidth}`
      )

      originEvent?.source[0]?.postMessage(
        {
          height: container.innerHeight,
          width: container.innerWidth,
        },
        originEvent.origin
      )
    },
    [originEvent]
  )

  return { sendMessage }
}

export default usePostMessage
