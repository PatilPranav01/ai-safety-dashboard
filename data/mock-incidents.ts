import type { Incident } from "@/types/incident"

export const mockIncidents: Incident[] = [
  {
    id: "1",
    title: "AI System Generated Misleading Medical Advice",
    description:
      "An AI chatbot provided dangerous medical advice that contradicted established medical guidelines, suggesting users could self-diagnose serious conditions without professional consultation.",
    severity: "High",
    reportedDate: new Date("2023-11-15"),
  },
  {
    id: "2",
    title: "Facial Recognition False Identification",
    description:
      "A facial recognition system incorrectly identified an individual as a person of interest, leading to unnecessary questioning by authorities.",
    severity: "Medium",
    reportedDate: new Date("2023-12-03"),
  },
  {
    id: "3",
    title: "AI Content Generator Created Copyrighted Material",
    description:
      "An AI content generation tool produced text that was substantially similar to copyrighted work without attribution, raising intellectual property concerns.",
    severity: "Low",
    reportedDate: new Date("2024-01-20"),
  },
  {
    id: "4",
    title: "Autonomous Vehicle Navigation Error",
    description:
      "An autonomous vehicle misinterpreted road markings during a software update test, causing it to briefly cross into the opposite lane before safety systems corrected the error.",
    severity: "High",
    reportedDate: new Date("2024-02-05"),
  },
  {
    id: "5",
    title: "AI Recruitment Tool Showed Gender Bias",
    description:
      "An AI-powered recruitment tool was found to systematically rank male candidates higher than equally qualified female candidates for technical positions.",
    severity: "Medium",
    reportedDate: new Date("2024-03-12"),
  },
]
