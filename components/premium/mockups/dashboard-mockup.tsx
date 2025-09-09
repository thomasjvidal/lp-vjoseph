import React from "react"

interface DashboardMockupProps {
  children: React.ReactNode
  className?: string
}

export function DashboardMockup({ children, className = "" }: DashboardMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Laptop frame */}
      <div className="relative w-[800px] h-[500px] bg-gray-800 rounded-lg shadow-2xl">
        {/* Screen */}
        <div className="absolute inset-2 bg-white rounded-md overflow-hidden">
          {/* Browser bar */}
          <div className="h-8 bg-gray-100 flex items-center px-4 gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <div className="flex-1 bg-gray-200 rounded px-3 py-1 text-xs text-gray-600 ml-4">
              joseph.app/dashboard
            </div>
          </div>
          
          {/* Content */}
          <div className="h-full bg-white">
            {children}
          </div>
        </div>
      </div>
      
      {/* Shadow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-xl scale-110" />
    </div>
  )
}
