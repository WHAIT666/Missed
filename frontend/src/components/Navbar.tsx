import { Button } from "@/components/ui/button"
import { MapIcon, FileIcon, PlusIcon, MessageCircleIcon, UserIcon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function Component() {
  const { theme } = useTheme()

  return (
    <div className={`fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="flex space-x-8">
        <Button variant="ghost" className="text-current hover:bg-red-500 hover:text-white">
          <UserIcon className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="text-current hover:bg-red-500 hover:text-white">
          <MessageCircleIcon className="w-6 h-6" />
        </Button>
      </div>
      <div className="relative mx-10">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <Button
            variant="solid"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg"
          >
            <PlusIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
      <div className="flex space-x-8">
        <Button variant="ghost" className="text-current hover:bg-red-500 hover:text-white">
          <FileIcon className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="text-current hover:bg-red-500 hover:text-white">
          <MapIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
