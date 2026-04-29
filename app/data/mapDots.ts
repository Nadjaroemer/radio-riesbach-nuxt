export interface MapDot {
  id: string
  label: string
  x: number  // percentage of map image width
  y: number  // percentage of map image height
  clipId: string
}

export const mapDots: MapDot[] = [
  { id: 'dot-01', label: 'Griechischer Markt',          x: 50, y: 22, clipId: '01' },
  { id: 'dot-02', label: 'Interview 1. April 1984',     x: 96, y: 97, clipId: '02' },
  { id: 'dot-03', label: 'Feldeggstrasse',              x: 81, y: 38, clipId: '03' },
  { id: 'dot-04', label: 'Finissage – Liz',             x: 63, y: 32, clipId: '04' },
  { id: 'dot-05', label: 'Häuserabbruch',               x: 59, y: 62, clipId: '05' },
  { id: 'dot-06', label: 'Mittelstrasse',               x: 57, y: 43, clipId: '06' },
  { id: 'dot-07', label: 'Abfallsackgebühren',          x: 61, y: 27, clipId: '07' },
  { id: 'dot-08', label: '50. Sendung – Quartierjournal', x: 40, y: 45, clipId: '08' },
  { id: 'dot-09', label: 'Schulwegsicherung',           x: 62, y: 49, clipId: '09' },
  { id: 'dot-10', label: 'Arbenzstrasse',               x: 29, y: 13, clipId: '10' },
  { id: 'dot-11', label: 'Drogenauffangstation',        x: 35, y:  5, clipId: '11' },
  { id: 'dot-12', label: 'Signet',                      x: 48, y: 35, clipId: '12' },
  { id: 'dot-13', label: 'Finissage – Peter',           x: 44, y: 48, clipId: '13' },
  { id: 'dot-14', label: 'Heimatstrasse',               x: 62, y: 52, clipId: '14' },
  { id: 'dot-15', label: 'Lila Bus',                    x: 57, y: 60, clipId: '15' },
  { id: 'dot-16', label: 'Riesbachtunnel',              x: 72, y: 72, clipId: '16' }
]
