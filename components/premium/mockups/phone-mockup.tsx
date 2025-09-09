import React from "react"

interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Phone frame */}
      <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
          
          {/* Screen content */}
          <div className="w-full h-full bg-white relative">
            {children}
          </div>
        </div>
      </div>
      
      {/* Shadow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[3rem] blur-xl scale-110" />
    </div>
  )
}
