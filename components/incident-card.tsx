"use client"

import { useState } from "react"
import type { Incident } from "@/types/incident"
import { formatDate } from "@/utils/date-formatter"
import { SeverityBadge } from "@/components/severity-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface IncidentCardProps {
  incident: Incident
}

export function IncidentCard({ incident }: IncidentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-tight">{incident.title}</h3>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>Reported: {formatDate(incident.reportedDate)}</span>
          </div>
        </div>
        <SeverityBadge severity={incident.severity} />
      </CardHeader>
      <CardContent>{isExpanded && <p className="text-sm text-muted-foreground">{incident.description}</p>}</CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-auto flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              Hide Details <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View Details <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
