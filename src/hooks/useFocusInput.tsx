import * as React from "react"

const useFocusInput = () => {
  const inputRef = React.useRef<any | undefined>(null)

  React.useEffect(() => {
    if (inputRef) {
      inputRef.current.focus()
    }
  }, [])

  return inputRef
}

export default useFocusInput
