'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface SectionSnapProps {
  children: React.ReactNode
  className?: string
  snapType?: 'y' | 'x' | 'both'
  snapAlign?: 'start' | 'center' | 'end'
  snapStop?: 'normal' | 'always'
  onSectionChange?: (index: number) => void
}

export function SectionSnap({
  children,
  className = '',
  snapType = 'y',
  snapAlign = 'start',
  snapStop = 'normal',
  onSectionChange
}: SectionSnapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Detectar mudança de seção
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return

    setIsScrolling(true)
    
    // Limpar timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Detectar seção atual baseada no scroll
    const container = containerRef.current
    const scrollTop = container.scrollTop
    const sectionHeight = container.clientHeight
    const newSection = Math.round(scrollTop / sectionHeight)

    if (newSection !== currentSection) {
      setCurrentSection(newSection)
      onSectionChange?.(newSection)
    }

    // Resetar flag de scrolling após um delay
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
    }, 150)

  }, [currentSection, onSectionChange])

  // Scroll suave para seção específica
  const scrollToSection = useCallback((index: number) => {
    if (!containerRef.current || prefersReducedMotion) return

    const container = containerRef.current
    const sectionHeight = container.clientHeight
    const targetScroll = index * sectionHeight

    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    })
  }, [prefersReducedMotion])

  // Prevenir scroll múltiplo (evitar pular várias seções)
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!containerRef.current || prefersReducedMotion) return

    const container = containerRef.current
    const deltaY = e.deltaY
    const currentScroll = container.scrollTop
    const sectionHeight = container.clientHeight
    const currentIndex = Math.round(currentScroll / sectionHeight)

    // Se já está fazendo scroll, ignorar eventos adicionais
    if (isScrolling) {
      e.preventDefault()
      return
    }

    // Determinar direção e próxima seção
    let nextIndex = currentIndex
    if (deltaY > 0) {
      // Scroll para baixo
      nextIndex = Math.min(currentIndex + 1, container.children.length - 1)
    } else if (deltaY < 0) {
      // Scroll para cima
      nextIndex = Math.max(currentIndex - 1, 0)
    }

    // Se mudou de seção, fazer scroll suave
    if (nextIndex !== currentIndex) {
      e.preventDefault()
      scrollToSection(nextIndex)
    }
  }, [isScrolling, prefersReducedMotion, scrollToSection])

  // Prevenir scroll com teclado
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (prefersReducedMotion) return

    const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
    if (keys.includes(e.key)) {
      e.preventDefault()
      
      const container = containerRef.current
      if (!container) return

      const sectionHeight = container.clientHeight
      const currentIndex = Math.round(container.scrollTop / sectionHeight)
      let nextIndex = currentIndex

      switch (e.key) {
        case 'ArrowUp':
        case 'PageUp':
          nextIndex = Math.max(currentIndex - 1, 0)
          break
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          nextIndex = Math.min(currentIndex + 1, container.children.length - 1)
          break
        case 'Home':
          nextIndex = 0
          break
        case 'End':
          nextIndex = container.children.length - 1
          break
      }

      if (nextIndex !== currentIndex) {
        scrollToSection(nextIndex)
      }
    }
  }, [prefersReducedMotion, scrollToSection])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Adicionar event listeners
    container.addEventListener('scroll', handleScroll, { passive: true })
    container.addEventListener('wheel', handleWheel, { passive: false })
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('wheel', handleWheel)
      document.removeEventListener('keydown', handleKeyDown)
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll, handleWheel, handleKeyDown])

  // Estilos CSS para scroll-snap
  const snapStyles = prefersReducedMotion ? {} : {
    scrollSnapType: `${snapType} ${snapStop}`,
    scrollBehavior: 'smooth' as const
  }

  return (
    <div
      ref={containerRef}
      className={`snap-container overflow-y-auto overflow-x-hidden ${className}`}
      style={{
        height: '100vh',
        ...snapStyles
      }}
    >
      {children}
    </div>
  )
}

// Hook para usar o SectionSnap programaticamente
export function useSectionSnap() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const scrollToSection = useCallback((index: number) => {
    const container = document.querySelector('.snap-container') as HTMLElement
    if (!container) return

    const sectionHeight = container.clientHeight
    const targetScroll = index * sectionHeight

    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    })
  }, [])

  return {
    currentSection,
    isScrolling,
    scrollToSection,
    setCurrentSection,
    setIsScrolling
  }
}
