import type { Object3D } from 'three'

// 'tap' avisa al juguete (emite el evento); 'jump' solo lo hace saltar
export type PokeKind = 'hover' | 'tap' | 'jump'

export interface ToyHandle {
  poke: (kind: PokeKind) => void
}

// El canvas vive detrás del contenido, así que no recibe eventos del DOM:
// los juguetes se registran aquí y World.vue hace el raycast con el puntero de la ventana.
export const toyRoots: Object3D[] = []

export function registerToy(root: Object3D, handle: ToyHandle) {
  root.userData.toy = handle
  toyRoots.push(root)
}

export function unregisterToy(root: Object3D) {
  const index = toyRoots.indexOf(root)
  if (index !== -1) toyRoots.splice(index, 1)
  delete root.userData.toy
}

export function findToy(object: Object3D | null): ToyHandle | null {
  while (object) {
    if (object.userData.toy) return object.userData.toy as ToyHandle
    object = object.parent
  }
  return null
}

export const pointer = {
  // Posición normalizada (-1..1) respecto al centro de la ventana
  x: 0,
  y: 0,
  clientX: 0,
  clientY: 0,
  // El puntero está sobre contenido opaco o interactivo (tarjetas, enlaces, formulario...)
  overUi: false,
}

export const motion = {
  reduced: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
}

// Medidas de la "caja de diseño" en la que se componen las escenas del escenario
export const DESIGN = { width: 6.4, height: 5 }
