'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CloudBackground } from './CloudBackground'

interface ProductSectionProps {
  id: string
  title: string
  subtitle?: string
  description: string
  transitionText?: string
  ctaText?: string
  ctaLink?: string
  backgroundVariant?: 'primary' | 'secondary' | 'accent'
  backgroundIntensity?: 'light' | 'medium' | 'strong'
  children?: React.ReactNode
  className?: string
}

export function ProductSection({
  id,
  title,
  subtitle,
  description,
  transitionText,
  ctaText,
  ctaLink,
  backgroundVariant = 'primary',
  backgroundIntensity = 'medium',
  children,
  className = ''
}: ProductSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Configurações de animação baseadas em prefers-reduced-motion
  const animationConfig = {
    duration: prefersReducedMotion ? 0 : 0.3,
    ease: prefersReducedMotion ? 'linear' : [0.25, 0.46, 0.45, 0.94] // iOS-like easing
  }

  // Variantes de animação para o conteúdo
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
      scale: prefersReducedMotion ? 1 : 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: animationConfig.duration,
        ease: animationConfig.ease,
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationConfig.duration,
        ease: animationConfig.ease
      }
    }
  }

  // Animação de entrada quando a seção fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [id])

  return (
    <section
      id={id}
      className={`relative h-screen flex items-center justify-center overflow-hidden snap-start ${className}`}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Fundo com nuvens */}
      <CloudBackground 
        variant={backgroundVariant}
        intensity={backgroundIntensity}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Texto de transição */}
          {transitionText && (
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                {transitionText}
              </p>
            </motion.div>
          )}

          {/* Título principal */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              {title}
            </h1>
          </motion.div>

          {/* Subtítulo */}
          {subtitle && (
            <motion.div variants={itemVariants}>
              <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
                {subtitle}
              </h2>
            </motion.div>
          )}

          {/* Descrição */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* CTA */}
          {ctaText && ctaLink && (
            <motion.div
              variants={itemVariants}
              className="pt-8"
            >
              <motion.a
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                {ctaText}
              </motion.a>
            </motion.div>
          )}

          {/* Conteúdo adicional */}
          {children && (
            <motion.div
              variants={itemVariants}
              className="pt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: prefersReducedMotion ? 0 : [0, 10, 0]
        }}
        transition={{
          duration: animationConfig.duration,
          ease: animationConfig.ease,
          y: {
            duration: prefersReducedMotion ? 0 : 2,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={prefersReducedMotion ? {} : {
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.5,
                repeat: prefersReducedMotion ? 0 : Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="text-sm text-muted-foreground">Role para baixo</span>
        </div>
      </motion.div>
    </section>
  )
}

// Componente para seções de transição entre produtos
interface TransitionSectionProps {
  text: string
  className?: string
}

export function TransitionSection({ text, className = '' }: TransitionSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <section className={`relative h-screen flex items-center justify-center snap-start ${className}`}>
      <CloudBackground variant="secondary" intensity="light" />
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-2xl md:text-4xl text-foreground font-light leading-relaxed">
          {text}
        </p>
      </motion.div>
    </section>
  )
}
