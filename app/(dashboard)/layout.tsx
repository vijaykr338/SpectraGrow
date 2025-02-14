"use client"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar for mobile screens */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}>
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
          <Sidebar />
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="flex justify-between items-center mb-4 lg:mb-8">
          {/* Toggle button for mobile screens */}
          <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl lg:text-3xl font-bold text-primary">SpectraGrow</h1>
          <LanguageSelector />
        </div>
        {children}
      </main>
    </div>
  )
}