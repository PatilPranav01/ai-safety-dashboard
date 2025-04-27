"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface DashboardHeaderProps {
  onSearch: (query: string) => void
}

export function DashboardHeader({ onSearch }: DashboardHeaderProps) {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-bold md:text-2xl">AI Safety Incident Dashboard</h1>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search incidents..."
              className="w-[200px] pl-8 md:w-[300px]"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
