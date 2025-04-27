import type { Severity } from "@/types/incident"
import { cn } from "@/lib/utils"

interface SeverityBadgeProps {
  severity: Severity
  className?: string
}

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"

  const severityClasses = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800",
  }

  return <span className={cn(baseClasses, severityClasses[severity], className)}>{severity}</span>
}
