import { ActivityLogIcon, ChatBubbleIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useExtension } from "@/contexts/extension-context";

interface ExtensionPanelButtonProps {
    extensionType: "Chat" | "Transcript" | "Summary"
}

export default function ExtensionPanelButton({extensionType}: ExtensionPanelButtonProps) {
    const {setExtensionPanel, extensionIsOpen, setExtensionIsOpen} = useExtension();

    const handleButtonClick = (panel: string) => {
        setExtensionPanel(panel)
        if (!extensionIsOpen) setExtensionIsOpen(true)
    }

    return (
        <Button
            variant="outline"
            onClick={() => handleButtonClick(extensionType)}
            className="rounded-r-none focus:z-10 bg-transparent space-x-2 items-center">
            {extensionType === "Summary" && <Pencil2Icon className="h-4 w-4 opacity-60" />}
            {extensionType === "Transcript" && <ActivityLogIcon className="h-4 w-4 opacity-60" />}
            {extensionType === "Chat" && <ChatBubbleIcon className="h-4 w-4 opacity-60" />}
            <span className="opacity-90">Summary</span>
        </Button>
    )
}
