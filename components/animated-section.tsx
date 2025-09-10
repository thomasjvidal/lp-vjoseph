"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
