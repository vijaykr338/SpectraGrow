import { Sidebar } from "@/components/sidebar"
import { LanguageSelector } from "@/components/language-selector"
import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">SpectraGrow</h1>
          <LanguageSelector />
        </div>
        {children}
      </main>
    </div>
  )
}

