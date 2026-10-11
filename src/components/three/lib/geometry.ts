import { CanvasTexture, ExtrudeGeometry, LatheGeometry, Shape, SRGBColorSpace, Vector2 } from 'three'
import type { BufferGeometry } from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

// Las geometrías se comparten entre instancias: se crean una vez por combinación de parámetros
const cache = new Map<string, BufferGeometry>()

function memo<T extends BufferGeometry>(key: string, create: () => T): T {
  if (!cache.has(key)) cache.set(key, create())
  return cache.get(key) as T
}

function extrude(shape: Shape, depth: number, bevel: number, curveSegments = 24) {
  const geometry = new ExtrudeGeometry(shape, {
    depth: depth - bevel * 2,
    bevelEnabled: true,
    bevelSize: bevel,
    bevelThickness: bevel,
    bevelOffset: -bevel,
    bevelSegments: 3,
    curveSegments,
  })
  geometry.translate(0, 0, -(depth - bevel * 2) / 2)
  return geometry
}

/** Arco de madera (pieza del arcoíris apilable), apoyado sobre y = 0 */
export function archGeometry(outer: number, inner: number, depth: number, bevel = 0.035) {
  return memo(`arch:${outer}:${inner}:${depth}:${bevel}`, () => {
    const shape = new Shape()
    shape.absarc(0, 0, outer, 0, Math.PI, false)
    shape.absarc(0, 0, inner, Math.PI, 0, true)
    shape.closePath()
    return extrude(shape, depth, bevel, 40)
  })
}

/** Prisma triangular (techo), apoyado sobre y = 0 */
export function roofGeometry(width: number, height: number, depth: number, bevel = 0.03) {
  return memo(`roof:${width}:${height}:${depth}:${bevel}`, () => {
    const shape = new Shape()
    shape.moveTo(-width / 2, 0)
    shape.lineTo(width / 2, 0)
    shape.lineTo(0, height)
    shape.closePath()
    return extrude(shape, depth, bevel)
  })
}

export function starGeometry(radius = 0.5, depth = 0.22) {
  return memo(`star:${radius}:${depth}`, () => {
    const shape = new Shape()
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? radius : radius * 0.5
      const a = (i / 10) * Math.PI * 2 + Math.PI / 2
      if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r)
      else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r)
    }
    shape.closePath()
    return extrude(shape, depth, 0.05)
  })
}

export function heartGeometry(size = 0.5, depth = 0.24) {
  return memo(`heart:${size}:${depth}`, () => {
    const s = size
    const shape = new Shape()
    shape.moveTo(0, -s * 0.9)
    shape.bezierCurveTo(-s * 0.35, -s * 0.55, -s * 1.1, -s * 0.1, -s * 1.1, s * 0.35)
    shape.bezierCurveTo(-s * 1.1, s * 0.8, -s * 0.75, s, -s * 0.5, s)
    shape.bezierCurveTo(-s * 0.25, s, -s * 0.05, s * 0.85, 0, s * 0.6)
    shape.bezierCurveTo(s * 0.05, s * 0.85, s * 0.25, s, s * 0.5, s)
    shape.bezierCurveTo(s * 0.75, s, s * 1.1, s * 0.8, s * 1.1, s * 0.35)
    shape.bezierCurveTo(s * 1.1, -s * 0.1, s * 0.35, -s * 0.55, 0, -s * 0.9)
    return extrude(shape, depth, 0.05)
  })
}

export function roundedBox(width: number, height: number, depth: number, radius = 0.05) {
  return memo(`box:${width}:${height}:${depth}:${radius}`, () => new RoundedBoxGeometry(width, height, depth, 4, radius))
}

/** Disco con cantos redondeados, apoyado sobre y = 0 */
export function discGeometry(radius: number, height: number, corner = 0.08) {
  return memo(`disc:${radius}:${height}:${corner}`, () => {
    const points: Vector2[] = [new Vector2(0, 0)]
    const steps = 6
    for (let i = 0; i <= steps; i++) {
      const a = -Math.PI / 2 + (i / steps) * (Math.PI / 2)
      points.push(new Vector2(radius - corner + Math.cos(a) * corner, corner + Math.sin(a) * corner))
    }
    for (let i = 0; i <= steps; i++) {
      const a = (i / steps) * (Math.PI / 2)
      points.push(new Vector2(radius - corner + Math.cos(a) * corner, height - corner + Math.sin(a) * corner))
    }
    points.push(new Vector2(0, height))
    return new LatheGeometry(points, 72)
  })
}

/** Cuerpo de muñeco de madera tipo "peg doll", apoyado sobre y = 0 */
export function pegBodyGeometry() {
  return memo('peg', () => {
    const profile: [number, number][] = [
      [0, 0], [0.2, 0], [0.235, 0.025], [0.24, 0.1], [0.225, 0.22],
      [0.18, 0.36], [0.125, 0.46], [0.1, 0.5], [0, 0.5],
    ]
    return new LatheGeometry(profile.map(([x, y]) => new Vector2(x, y)), 32)
  })
}

let shadowTexture: CanvasTexture | null = null

/** Mancha difusa para simular la sombra de contacto bajo la escena */
export function softShadowTexture() {
  if (shadowTexture) return shadowTexture
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(120, 72, 40, 0.55)')
  gradient.addColorStop(0.55, 'rgba(120, 72, 40, 0.22)')
  gradient.addColorStop(1, 'rgba(120, 72, 40, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  shadowTexture = new CanvasTexture(canvas)
  shadowTexture.colorSpace = SRGBColorSpace
  return shadowTexture
}
