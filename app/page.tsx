"use client"

import { useState } from "react"
import { useIncidents } from "@/hooks/use-incidents"
import { DashboardHeader } from "@/components/dashboard-header"
import { FilterControls } from "@/components/filter-controls"
import { IncidentList } from "@/components/incident-list"
import { ReportForm } from "@/components/report-form"
import { IncidentStats } from "@/components/incident-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const { incidents, addIncident, sortOrder, setSortOrder, severityFilter, setSeverityFilter } = useIncidents()

  const [searchQuery, setSearchQuery] = useState("")

  const filteredIncidents = searchQuery
    ? incidents.filter(
        (incident) =>
          incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          incident.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : incidents

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader onSearch={setSearchQuery} />

      <main className="flex-1 py-6">
        <div className="container grid gap-6 px-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-6 md:col-span-2 lg:col-span-3">
            <FilterControls
              severityFilter={severityFilter}
              onSeverityChange={setSeverityFilter}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
            />

            <Tabs defaultValue="list" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list">Incident List</TabsTrigger>
                <TabsTrigger value="report">Report Incident</TabsTrigger>
              </TabsList>
              <TabsContent value="list" className="mt-4">
                <IncidentList incidents={filteredIncidents} />
              </TabsContent>
              <TabsContent value="report" className="mt-4">
                <ReportForm onSubmit={addIncident} />
              </TabsContent>
            </Tabs>
          </div>

          <div className="hidden md:block">
            <IncidentStats incidents={incidents} />
          </div>
        </div>
      </main>
    </div>
  )
}
