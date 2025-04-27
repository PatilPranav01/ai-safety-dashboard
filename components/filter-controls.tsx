"use client"

import type { Severity } from "@/types/incident"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterControlsProps {
  severityFilter: "All" | Severity
  onSeverityChange: (value: "All" | Severity) => void
  sortOrder: "newest" | "oldest"
  onSortOrderChange: (value: "newest" | "oldest") => void
}

export function FilterControls({
  severityFilter,
  onSeverityChange,
  sortOrder,
  onSortOrderChange,
}: FilterControlsProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor="severity-filter" className="text-sm font-medium">
          Filter by Severity:
        </label>
        <Select value={severityFilter} onValueChange={(value) => onSeverityChange(value as "All" | Severity)}>
          <SelectTrigger id="severity-filter" className="w-[180px]">
            <SelectValue placeholder="Select severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Severities</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor="sort-order" className="text-sm font-medium">
          Sort by Date:
        </label>
        <Select value={sortOrder} onValueChange={(value) => onSortOrderChange(value as "newest" | "oldest")}>
          <SelectTrigger id="sort-order" className="w-[180px]">
            <SelectValue placeholder="Select sort order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
