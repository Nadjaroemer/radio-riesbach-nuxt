export interface MapDot {
  id: string
  label: string
  x: number  // percentage of map image width
  y: number  // percentage of map image height
  clipId: string
}

export const mapDots: MapDot[] = [
  { id: 'dot-01', label: 'Studio Hauptgebäude', x: 42, y: 38, clipId: '01' },
  { id: 'dot-02', label: 'Sendemasten', x: 61, y: 22, clipId: '02' },
  { id: 'dot-03', label: 'Redaktion', x: 35, y: 55, clipId: '03' },
  { id: 'dot-04', label: 'Konzertlokal', x: 55, y: 60, clipId: '04' },
  { id: 'dot-05', label: 'Archiv', x: 28, y: 42, clipId: '05' }
]
