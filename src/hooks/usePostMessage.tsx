import * as React from "react"
import _ from "lodash"
import { Message } from "semantic-ui-react"

const usePostMessage = (url: String) => {
  const [originEvent, setOriginEvent] = React.useState<any | undefined>(null)

  React.useEffect(() => {
    const crossOriginConnection = () => {
      window.addEventListener(
        "message",
        (event: any) => {
          if (!event.origin.startsWith(url) || event.data !== "CORS") return

          setOriginEvent(event)
        },
        false
      )
    }

    if (originEvent === null) crossOriginConnection()
  }, [])

  const sendMessage = React.useCallback(
    message => {
      originEvent?.source?.postMessage(message, originEvent.origin)
    },
    [originEvent]
  )

  return { sendMessage }
}

export default usePostMessage
