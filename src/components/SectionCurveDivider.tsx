import React from 'react'

export type DividerVariant = 'curve' | 'wave' | 'slant' | 'straight' | 'none'

interface SectionCurveDividerProps {
  fillColor?: 'niemeyer' | 'dark' | 'gray' | 'argila' | 'coffee'
  customColor?: string
  position?: 'top' | 'bottom'
  variant?: DividerVariant
  className?: string
}

export const SectionCurveDivider: React.FC<SectionCurveDividerProps> = ({
  fillColor = 'niemeyer',
  customColor,
  position = 'bottom',
  variant = 'curve',
  className = '',
}) => {
  if (variant === 'none') {
    return null
  }

  // Caminhos SVG para cada geometria
  const renderPath = () => {
    switch (variant) {
      case 'wave':
        return (
          <path
            d="M0,32 C240,70 480,10 720,40 C960,70 1200,20 1440,50 L1440,96 L0,96 Z"
            fill={customColor || undefined}
          />
        )
      case 'slant':
        return (
          <path
            d="M0,0 L1440,72 L1440,96 L0,96 Z"
            fill={customColor || undefined}
          />
        )
      case 'straight':
        return (
          <path
            d="M0,80 L1440,80 L1440,96 L0,96 Z"
            fill={customColor || undefined}
          />
        )
      case 'curve':
      default:
        return (
          <path
            d="M0,0 C320,86 540,96 720,68 C900,40 1140,84 1440,12 L1440,96 L0,96 Z"
            fill={customColor || undefined}
          />
        )
    }
  }

  return (
    <div
      className={`mil-section-curve-divider mil-fill-${fillColor} ${
        position === 'top' ? 'mil-curve-top' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {renderPath()}
      </svg>
    </div>
  )
}
