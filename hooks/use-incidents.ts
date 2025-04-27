"use client"

import { useState, useCallback } from "react"
import type { Incident, Severity } from "@/types/incident"
import { mockIncidents } from "@/data/mock-incidents"

type SortOrder = "newest" | "oldest"
type SeverityFilter = "All" | Severity

export const useIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents)
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest")
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>("All")

  const addIncident = useCallback((incident: Omit<Incident, "id" | "reportedDate">) => {
    const newIncident: Incident = {
      ...incident,
      id: Date.now().toString(),
      reportedDate: new Date(),
    }

    setIncidents((prev) => [newIncident, ...prev])
  }, [])

  const filteredAndSortedIncidents = useCallback(() => {
    let result = [...incidents]

    // Apply severity filter
    if (severityFilter !== "All") {
      result = result.filter((incident) => incident.severity === severityFilter)
    }

    // Apply sort order
    result.sort((a, b) => {
      const dateA = new Date(a.reportedDate).getTime()
      const dateB = new Date(b.reportedDate).getTime()
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB
    })

    return result
  }, [incidents, severityFilter, sortOrder])

  return {
    incidents: filteredAndSortedIncidents(),
    addIncident,
    sortOrder,
    setSortOrder,
    severityFilter,
    setSeverityFilter,
  }
}
