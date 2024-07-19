import React from 'react';
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { FishIcon, SearchIcon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from '@/components/theme-provider';

const TopNavbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-green-600 md:gap-4 fixed top-0 z-50">
      <div className="flex items-center">
        <FishIcon className="w-8 h-8 text-white" />
        <span className="ml-2 text-xl font-bold text-white">SawYou</span>
      </div>
      <div className="relative mx-auto flex-1 md:grow-0 md:mx-0">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-white" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-white pl-8 md:w-[200px] lg:w-[300px]"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-full text-white">
          {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
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
      </div>
    </header>
  );
};

export default TopNavbar;
