'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CloudBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent'
  intensity?: 'light' | 'medium' | 'strong'
  className?: string
}

export function CloudBackground({ 
  variant = 'primary', 
  intensity = 'medium',
  className = '' 
}: CloudBackgroundProps) {
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

  // Gradientes baseados na paleta do projeto
  const getGradientConfig = () => {
    switch (variant) {
      case 'primary':
        return {
          from: 'hsl(165, 96%, 71%, 0.15)', // primary com opacidade
          via: 'hsl(160, 100%, 50%, 0.08)', // primary-dark com opacidade
          to: 'hsl(160, 48%, 87%, 0.12)', // primary-light com opacidade
        }
      case 'secondary':
        return {
          from: 'hsl(160, 14%, 93%, 0.1)', // secondary
          via: 'hsl(240, 2%, 25%, 0.08)', // accent
          to: 'hsl(210, 11%, 7%, 0.05)', // background
        }
      case 'accent':
        return {
          from: 'hsl(240, 2%, 25%, 0.12)', // accent
          via: 'hsl(160, 14%, 93%, 0.08)', // secondary
          to: 'hsl(165, 96%, 71%, 0.06)', // primary
        }
      default:
        return {
          from: 'hsl(165, 96%, 71%, 0.15)',
          via: 'hsl(160, 100%, 50%, 0.08)',
          to: 'hsl(160, 48%, 87%, 0.12)',
        }
    }
  }

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'light': return 0.6
      case 'medium': return 1
      case 'strong': return 1.4
      default: return 1
    }
  }

  const gradientConfig = getGradientConfig()
  const intensityMultiplier = getIntensityMultiplier()

  // SVG de nuvem otimizado
  const CloudSVG = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      className="absolute inset-0 opacity-30"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="cloudGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={gradientConfig.from} />
          <stop offset="50%" stopColor={gradientConfig.via} />
          <stop offset="100%" stopColor={gradientConfig.to} />
        </radialGradient>
      </defs>
      
      {/* Nuvem principal */}
      <motion.path
        d="M200,400 Q150,350 200,300 Q250,250 300,300 Q350,200 450,250 Q550,200 650,250 Q750,200 850,250 Q950,200 1050,250 Q1100,300 1050,350 Q1100,400 1050,450 Q1000,500 950,450 Q900,500 800,450 Q700,500 600,450 Q500,500 400,450 Q300,500 200,450 Q150,400 200,400 Z"
        fill="url(#cloudGradient)"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: prefersReducedMotion ? 0.3 : [0.2, 0.4, 0.2],
          scale: prefersReducedMotion ? 1 : [0.8, 1.1, 0.8]
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 8,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Nuvem secundária */}
      <motion.path
        d="M100,600 Q50,550 100,500 Q150,450 200,500 Q250,400 350,450 Q450,400 550,450 Q650,400 750,450 Q850,400 950,450 Q1000,500 950,550 Q1000,600 950,650 Q900,700 800,650 Q700,700 600,650 Q500,700 400,650 Q300,700 200,650 Q150,600 100,600 Z"
        fill="url(#cloudGradient)"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: prefersReducedMotion ? 0.2 : [0.1, 0.3, 0.1],
          scale: prefersReducedMotion ? 1 : [0.9, 1.05, 0.9]
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 12,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Nuvem terciária */}
      <motion.path
        d="M0,200 Q-50,150 0,100 Q50,50 100,100 Q150,0 250,50 Q350,0 450,50 Q550,0 650,50 Q750,0 850,50 Q950,0 1050,50 Q1100,100 1050,150 Q1100,200 1050,250 Q1000,300 900,250 Q800,300 700,250 Q600,300 500,250 Q400,300 300,250 Q200,300 100,250 Q50,200 0,200 Z"
        fill="url(#cloudGradient)"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ 
          opacity: prefersReducedMotion ? 0.15 : [0.05, 0.25, 0.05],
          scale: prefersReducedMotion ? 1 : [0.7, 1.2, 0.7]
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 15,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </svg>
  )

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradiente de fundo */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, ${gradientConfig.from} ${intensityMultiplier * 100}%, transparent 70%),
            radial-gradient(ellipse at 80% 80%, ${gradientConfig.via} ${intensityMultiplier * 80}%, transparent 60%),
            radial-gradient(ellipse at 50% 50%, ${gradientConfig.to} ${intensityMultiplier * 60}%, transparent 50%)
          `
        }}
      />
      
      {/* SVG das nuvens */}
      <CloudSVG />
      
      {/* Overlay sutil para profundidade */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, transparent 0%, hsl(var(--background) / 0.1) 100%)`
        }}
      />
    </div>
  )
}
