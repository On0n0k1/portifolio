import { useEffect, useRef } from 'react'

type VantaEffect = { destroy: () => void }

export function FogBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let effect: VantaEffect | null = null
    let cancelled = false

    // three.js + vanta are ~750KB; load them after the resume content is
    // already interactive rather than blocking first paint on a fog effect.
    Promise.all([import('three'), import('vanta/dist/vanta.fog.min')]).then(
      ([THREE, { default: FOG }]) => {
        if (cancelled) return
        effect = FOG({
          el,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x54432a,
          midtoneColor: 0x120f24,
          lowlightColor: 0x050510,
          baseColor: 0x01000f,
          blurFactor: 0.6,
          speed: 0.8,
          zoom: 1.3,
        })
      },
    )

    return () => {
      cancelled = true
      effect?.destroy()
      effect = null
    }
  }, [])

  return <div className="fog-background" ref={containerRef} aria-hidden="true" />
}
