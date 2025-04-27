"use client"

import { useMemo } from "react"
import type { Incident } from "@/types/incident"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SeverityBadge } from "@/components/severity-badge"
import { formatDate } from "@/utils/date-formatter"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

interface IncidentStatsProps {
  incidents: Incident[]
}

export function IncidentStats({ incidents }: IncidentStatsProps) {
  const stats = useMemo(() => {
    const totalCount = incidents.length
    const severityCounts = {
      Low: incidents.filter((i) => i.severity === "Low").length,
      Medium: incidents.filter((i) => i.severity === "Medium").length,
      High: incidents.filter((i) => i.severity === "High").length,
    }

    const latestIncident = [...incidents].sort(
      (a, b) => new Date(b.reportedDate).getTime() - new Date(a.reportedDate).getTime(),
    )[0]

    const oldestIncident = [...incidents].sort(
      (a, b) => new Date(a.reportedDate).getTime() - new Date(b.reportedDate).getTime(),
    )[0]

    const chartData = [
      { name: "Low", value: severityCounts.Low },
      { name: "Medium", value: severityCounts.Medium },
      { name: "High", value: severityCounts.High },
    ]

    return {
      totalCount,
      severityCounts,
      latestIncident,
      oldestIncident,
      chartData,
    }
  }, [incidents])

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Incident Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Total Incidents</h4>
              <p className="text-2xl font-bold">{stats.totalCount}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground">By Severity</h4>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center rounded-md border p-2">
                  <SeverityBadge severity="Low" />
                  <p className="mt-1 text-xl font-bold">{stats.severityCounts.Low}</p>
                </div>
                <div className="flex flex-col items-center rounded-md border p-2">
                  <SeverityBadge severity="Medium" />
                  <p className="mt-1 text-xl font-bold">{stats.severityCounts.Medium}</p>
                </div>
                <div className="flex flex-col items-center rounded-md border p-2">
                  <SeverityBadge severity="High" />
                  <p className="mt-1 text-xl font-bold">{stats.severityCounts.High}</p>
                </div>
              </div>
            </div>

            <div className="h-40">
              <h4 className="mb-2 text-sm font-medium text-muted-foreground">Severity Distribution</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.chartData}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="currentColor" className="fill-primary" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Latest Incident</CardTitle>
        </CardHeader>
        <CardContent>
          {stats.latestIncident ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{stats.latestIncident.title}</h3>
                <SeverityBadge severity={stats.latestIncident.severity} />
              </div>
              <p className="text-sm text-muted-foreground">Reported: {formatDate(stats.latestIncident.reportedDate)}</p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No incidents reported yet.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>AI Safety Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Regularly audit AI systems for bias and unintended behaviors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Implement robust testing procedures before deployment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Maintain human oversight for critical AI decision systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Document and share safety incidents to improve industry practices</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
