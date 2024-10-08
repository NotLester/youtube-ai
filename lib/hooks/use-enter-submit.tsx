import { useRef, type KeyboardEvent, type RefObject } from "react"

export function useEnterSubmit(): {
  formRef: RefObject<HTMLFormElement>
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onKeyUp: (event: KeyboardEvent<HTMLTextAreaElement>) => void
} {
  const formRef = useRef<HTMLFormElement>(null)

  const handleKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    event.stopPropagation()

    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      formRef.current?.requestSubmit()
      event.preventDefault()
    }
  }

  const handleKeyUp = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    event.stopPropagation()
  }

  return { formRef, onKeyDown: handleKeyDown, onKeyUp: handleKeyUp }
}
