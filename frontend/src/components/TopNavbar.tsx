import React from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { FishIcon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from '@/components/theme-provider';

// Mock user object for illustration purposes
const user = {
  isLoggedIn: true, // Set this to false to simulate a logged-out user
  name: "AS",
  avatar: "/placeholder-user.jpg"
};

const TopNavbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-[#ef4444] md:gap-4 fixed top-0 z-50">
      <div className="flex items-center">
        <FishIcon className="w-8 h-8 text-white" />
        <span className="ml-2 text-xl font-bold text-white">ReConnect</span>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-full text-white">
          {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </Button>
        {user.isLoggedIn && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="#" className="flex items-center gap-2">
                  <div className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};

export default TopNavbar;
