export interface AudioClip {
  id: string
  title: string
  description: string
  image: string
  src: string
  originalUrl: string
}

export const audioClips: AudioClip[] = [
  {
    id: '01',
    title: 'Sendebeginn 1984',
    description: 'Die erste Sendung von Radio Riesbach geht auf Sendung.',
    image: '/images/clips/clip-01.jpg',
    src: '/audio/clip-01.mp3',
    originalUrl: '#'
  },
  {
    id: '02',
    title: 'Morgenmagazin',
    description: 'Nachrichten und Musik zum Start in den Tag.',
    image: '/images/clips/clip-02.jpg',
    src: '/audio/clip-02.mp3',
    originalUrl: '#'
  },
  {
    id: '03',
    title: 'Interview mit dem Gründer',
    description: 'Hans Meier erzählt, wie Radio Riesbach entstand.',
    image: '/images/clips/clip-03.jpg',
    src: '/audio/clip-03.mp3',
    originalUrl: '#'
  },
  {
    id: '04',
    title: 'Musik aus dem Seefeld',
    description: 'Lokale Künstler live im Studio.',
    image: '/images/clips/clip-04.jpg',
    src: '/audio/clip-04.mp3',
    originalUrl: '#'
  },
  {
    id: '05',
    title: 'Abendprogramm 1986',
    description: 'Kulturberichte und Stadtgespräche.',
    image: '/images/clips/clip-05.jpg',
    src: '/audio/clip-05.mp3',
    originalUrl: '#'
  },
  {
    id: '06',
    title: 'Wetterbericht Seefeld',
    description: 'Der tägliche Wetterbericht für das Quartier.',
    image: '/images/clips/clip-06.jpg',
    src: '/audio/clip-06.mp3',
    originalUrl: '#'
  },
  {
    id: '07',
    title: 'Jingle Radio Riesbach',
    description: 'Das Original-Jingle aus den 80ern.',
    image: '/images/clips/clip-07.jpg',
    src: '/audio/clip-07.mp3',
    originalUrl: '#'
  },
  {
    id: '08',
    title: 'Politische Debatte',
    description: 'Diskussion über Stadtentwicklung im Seefeld.',
    image: '/images/clips/clip-08.jpg',
    src: '/audio/clip-08.mp3',
    originalUrl: '#'
  }
]
