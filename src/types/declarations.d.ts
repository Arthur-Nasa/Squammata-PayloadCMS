declare module 'react-masonry' {
  import * as React from 'react'

  export interface MasonryProps {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
    columns?: number
    gap?: number
    [key: string]: any
  }

  export const Masonry: React.FC<MasonryProps>
  export default Masonry
}
