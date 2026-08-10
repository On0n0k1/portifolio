declare module 'vanta/dist/vanta.fog.min' {
  import type * as THREE from 'three'

  interface VantaFogOptions {
    el: HTMLElement | string
    THREE?: typeof THREE
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
    highlightColor?: number
    midtoneColor?: number
    lowlightColor?: number
    baseColor?: number
    blurFactor?: number
    speed?: number
    zoom?: number
  }

  interface VantaEffect {
    destroy: () => void
    resize: () => void
  }

  export default function FOG(options: VantaFogOptions): VantaEffect
}
