import * as React from "react"

const usePostMessage = (url: String) => {
  const [originEvent, setOriginEvent] = React.useState<any | undefined>(null)

  React.useEffect(() => {
    const crossOriginConnection = () => {
      window.addEventListener(
        "message",
        (event: any) => {
          if (!event.origin.startsWith(url) || event.data !== "CORS") return

          console.log("EventListener SET")
          setOriginEvent(event)
        },
        false
      )
    }

    if (originEvent === null) crossOriginConnection()
  }, [])

  const sendMessage = React.useCallback(
    message => {
      console.log("Message SENT")
      originEvent?.source?.postMessage(message, originEvent.origin)
    },
    [originEvent]
  )

  return { sendMessage }
}

export default usePostMessage
