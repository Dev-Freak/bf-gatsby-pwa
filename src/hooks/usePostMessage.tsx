import * as React from "react"

const usePostMessage = () => {
  const originEvent = React.useRef<any | undefined>(null)

  const sendMessage = () => {
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
  }

  React.useEffect(() => {
    const crossOriginConnection = () => {
      console.log("crossOriginConnection")

      window.addEventListener(
        "message",
        (event: any) => {
          console.log("EventListener::message")
          console.log(event)
          if (
            event.origin !== "https://borgfinancial.com.au/" ||
            event.data !== "CORS"
          )
            return

          originEvent.current = event
        },
        false
      )
    }

    if (originEvent.current === null) crossOriginConnection()
  }, [])

  return { sendMessage }
}

export default usePostMessage
