import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard"
import {
  CardStackPlusIcon,
  CaretSortIcon, CheckIcon,
  Link2Icon
} from "@radix-ui/react-icons"

import { Button } from "../ui/button"
import { CollapsibleTrigger } from "../ui/collapsible"
import { TooltipWrapper } from "../ui/tooltip-wrapper"
import ExtensionPanelButton from "./extension-panel-button"

export default function ExtensionActions() {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  const CopyVideoURL = () => {
    if (isCopied) return
    copyToClipboard(window.location.href)
  }

  return (
    <div className="border border-zinc-200 rounded-md flex items-center justify-between p-2.5 px-3 dark:bg-[#0f0f0f] dark:text-white dark:border-zinc-800">
      <CardStackPlusIcon className="h-6 w-6 opacity-50 ml-2" />
      <div className="flex justify-center items-center space-x-2">
        <div className="flex -space-x-px">
          <ExtensionPanelButton extensionType="Summary" />
          <ExtensionPanelButton extensionType="Transcript" />
          <ExtensionPanelButton extensionType="Chat" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <TooltipWrapper text={"Copy Video URL"}>
          <Button variant="outline" size="icon" onClick={() => CopyVideoURL()}>
            {isCopied ? (
              <CheckIcon className="h-4.5 w-4.5 opacity-60" />
            ) : (
              <Link2Icon className="h-4.5 w-4.5 opacity-60" />
            )}
          </Button>
        </TooltipWrapper>

        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon">
            <CaretSortIcon className="h-4.5 w-4.5 opacity-60" />
          </Button>
        </CollapsibleTrigger>
      </div>
    </div>
  )
}
