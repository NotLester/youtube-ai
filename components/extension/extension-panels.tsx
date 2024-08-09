import { useExtension } from "@/contexts/extension-context"

import Chat from "../chat/chat"
import Summary from "../summary/summary"
import Transcript from "../transcript/transcript"

export default function ExtensionPanels() {
  const { extensionPanel } = useExtension()

  return (
    <div>
      {extensionPanel === "Summary" && <Summary />}
      {extensionPanel === "Transcript" && <Transcript />}
      {extensionPanel === "Chat" && <Chat />}
    </div>
  )
}
