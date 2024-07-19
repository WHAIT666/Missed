import { Button } from "@/components/ui/button"
import { MapIcon, FileIcon, PlusIcon, MessageCircleIcon, UserIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center bg-white shadow-lg p-4">
      <Button variant="ghost" className="text-red-500">
        <MapIcon className="w-6 h-6" />
      </Button>
      <Button variant="ghost" className="text-gray-500">
        <FileIcon className="w-6 h-6" />
      </Button>
      <div className="relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <Button
            variant="solid"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg"
          >
            <PlusIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
      <Button variant="ghost" className="text-gray-500">
        <MessageCircleIcon className="w-6 h-6" />
      </Button>
      <Button variant="ghost" className="text-gray-500">
        <UserIcon className="w-6 h-6" />
      </Button>
    </div>
  )
}

