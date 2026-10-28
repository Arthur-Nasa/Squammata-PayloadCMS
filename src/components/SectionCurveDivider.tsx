import React from 'react'

interface SectionCurveDividerProps {
  fillColor?: 'niemeyer' | 'dark' | 'gray' | 'argila' | 'coffee'
  customColor?: string
  position?: 'top' | 'bottom'
  className?: string
}

export const SectionCurveDivider: React.FC<SectionCurveDividerProps> = ({
  fillColor = 'niemeyer',
  customColor,
  position = 'bottom',
  className = '',
}) => {
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
        {/* Curva orgânica contínua calibrada a partir do dorso e asa do pássaro Squammata */}
        <path
          d="M0,0 C320,86 540,96 720,68 C900,40 1140,84 1440,12 L1440,96 L0,96 Z"
          fill={customColor || undefined}
        />
      </svg>
    </div>
  )
}
