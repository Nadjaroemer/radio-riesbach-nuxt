export interface AudioClip {
  id: string;
  slug: string;
  title: string;
  description: string;
  descriptionEn?: string;
  image: string;
  src: string;
  originalUrl: string;
}

export const audioClips: AudioClip[] = [
  {
    id: "01",
    slug: "griechischer-markt",
    title: "Griechischer Markt",
    description:
      "Interview mit einer griechischen Anwohnerin, die sich für den kulturellen Austausch im Quartier engagiert. Sie berichtet auch über Schwierigkeiten von nicht-deutschsprechenden Eltern in der Schweiz.",
    descriptionEn:
      "An interview with a Greek resident who is actively involved in promoting cultural exchange in the neighborhood. She also discusses the challenges that non-German-speaking parents face in Switzerland.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Griechischer Markt_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-012A",
  },
  {
    id: "11",
    slug: "drogenauffangstation-tiefenbrunnen",
    title: "Drogenauffangstation Tiefenbrunnen",
    description:
      "Ein Sozialarbeiter schildert den Ablauf in der Notschlafstelle. Hier können Jugendliche und junge Erwachsene mit Drogenproblemen die Nacht verbringen, Unterstützung erhalten und frühstücken.",
    descriptionEn:
      "A social worker describes the daily routine at the overnight shelter. Here, teenagers and young adults with substance abuse issues can spend the night, receive support, and have breakfast.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Drogenauffangstation_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-018B",
  },
  {
    id: "16",
    slug: "riesbachtunnel",
    title: "Riesbachtunnel",
    description:
      "Nach über hundertjährigem Bestehen wird der Riesbachtunnel saniert. Zwei Reporter:innen fahren nachts mit dem Bauzug in den Tunnel und berichten direkt von der Baustelle.",
    descriptionEn:
      "After more than a century in service, the Riesbach Tunnel is undergoing renovation. Two reporters ride the construction train into the tunnel at night and report directly from the construction site.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Riesbachtunnel_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-038A",
  },
  {
    id: "05",
    slug: "haeuserabbruch-hoeschgasse",
    title: "Häuserabbruch Höschgasse",
    description:
      "Die Liegenschaften an der Höschgasse 72, 74, 76 und 78 sollen abgebrochen werden. Bewohner:innen erzählen, wie es ist, dort zu wohnen, und warum sie hoffen, dass die Häuser bewahrt und renoviert werden können.",
    descriptionEn:
      "The buildings at Höschgasse 72, 74, 76, and 78 are planned for demolition. Residents share what it’s like to live there and why they hope the buildings can be spared and renovated.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Haeuserabbruch_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-021A",
  },
  {
    id: "14",
    slug: "heimatstrasse",
    title: "Heimatstrasse",
    description:
      "Liz Mennel erzählt die Geschichte der Heimatstrasse und der Eigenstrasse: Wie das Quartier Gaslampen bekam und ein eigenes Gaswerk. Und wann und warum die Dufourstrasse gebaut wurde.",
    descriptionEn:
      "Liz Mennel tells the story of Heimatstrasse and Eigenstrasse: how the neighborhood got its gas lamps and its own gasworks, and when and why Dufourstrasse was built.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Heimatstrasse_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-039A",
  },
  {
    id: "09",
    slug: "schulwegsicherung",
    title: "Schulwegsicherung",
    description:
      "Zwei Mütter aus dem Quartier berichten von den Schwierigkeiten und Gefahren, mit denen sie und ihre Kinder auf dem Schulweg konfrontiert sind. Anschliessend sprechen zwei Elternvertreter über den Verkehr im Quartier und Möglichkeiten, die Schulwege sicherer zu machen.",
    descriptionEn:
      "Two mothers living in the neighbourhood describe the difficulties and dangers they and their children face on their way to school. This is followed by a discussion with two parent representatives about traffic in the neighbourhood and ways to make the routes to school safer.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Schulwegsicherung_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-042A",
  },
  {
    id: "10",
    slug: "arbenzstrasse-1",
    title: "Arbenzstrasse 1",
    description:
      "An der Arbenzstrasse 1 befindet sich das Personalhaus der Konfiserie «Sprüngli». Die Verwalterin erzählt, wer die Bewohner:innen des Hauses sind und wie das Personalhaus organisiert ist.",
    descriptionEn:
      "The employee residence for the “Sprüngli” confectionery is located at Arbenzstrasse 1. The manager explains who lives there and how the residence is organized.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Arbenzstrasse_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-089A",
  },
  {
    id: "06",
    slug: "mittelstrasse",
    title: "Mittelstrasse",
    description:
      "Eine Anwohnerin erinnert sich, wie ihre drei Kinder in den 1970er- und 1980er-Jahren an der Mittelstrasse aufgewachsen sind. Und wie sich die Strasse seither durch den zunehmenden Verkehr verändert hat. Liz Mennel stellt ein bekanntes Innenarchitekten-Paar vor, das an derselben Strasse wohnt.",
    descriptionEn:
      "A local resident recalls how her three children grew up on Mittelstrasse in the 1970s and 1980s. She also describes how the street has changed since then due to increasing traffic. Liz Mennel introduces a well-known couple of interior designers who live on the same street.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Mittelstrasse_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-119A",
  },
  {
    id: "07",
    slug: "abfallsackgebuehren",
    title: "Abfallsackgebühren",
    description:
      "Im Quartier soll man neu für Abfallsäcke bezahlen müssen. Das neue Entsorgungskonzept des Kantons wird vorgestellt und einzelne Anwohner kommen zu Wort. Die Meinungen sind geteilt.",
    descriptionEn:
      "Residents in the neighborhood will soon have to pay for trash bags. The canton’s new waste management plan is being introduced, and some residents are sharing their views. There are mixed opinions.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Abfallsackgebühren_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-132A",
  },
  {
    id: "03",
    slug: "feldeggstrasse",
    title: "Feldeggstrasse",
    description:
      "Auf einem Spaziergang durch die Feldeggstrasse erzählt Liz Mennel, welche Arten von Läden und Geschäften es dort gibt. Dann besucht sie den Städtischen Kindergarten und lässt die Kinder dort zu Wort kommen. Schliesslich kommt sie an zwei Bauruinen vorbei. Sie erklärt, warum die Häuser so verfallen sind und wie es damit weitergehen könnte.",
    descriptionEn:
      "On a walk down Feldeggstrasse, Liz Mennel describes the kinds of shops and businesses located there. She then visits the municipal kindergarten and lets the children there have their say. Finally, she passes by two abandoned buildings. She explains why the buildings have fallen into such disrepair and what might happen to them next.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Feldeggstrasse_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-136B",
  },
  {
    id: "15",
    slug: "lila-bus",
    title: "Lila Bus",
    description:
      "Die Regisseurin Josy Meier hat einen Film über die Drogenprostitution und den Freierverkehr im Seefeld gedreht. Sie spricht über den «Lila Bus» und warum es ihn braucht. Der umgebaute Bus steht im Quartier, damit sich prostituierende Frauen einen Ort haben, an dem sie sich aufwärmen, zurückziehen und Unterstützung holen können. Film «Der Kunde ist König» (1992).",
    descriptionEn:
      "Director Josy Meier has made a film about drug-related prostitution and the sex trade in Seefeld. She talks about the “Lila Bus” and why it’s so important. The converted bus is stationed in the neighborhood so that women working in the sex trade have a place where they can warm up, retreat, and seek support. Film: “The Customer Is King” (1992).",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_LilaBus_kurz.mp3",
    originalUrl:
      "https://www.bild-video-ton.ch/bestand/objekt/Sozarch_F_1030-140A",
  },
  {
    id: "02",
    slug: "interview-1-april-1984",
    title: "Interview 1. April 1984",
    description:
      "Erwartungen eines Gemeinderats an das neue Quartierradio, Rückblick auf die allererste Sendung vom 1.04.1984, Datum: 21.10.1984.",
    descriptionEn:
      "A local council member's expectations for the new community radio station, a look back at the very first broadcast on April 1, 1984. Date: October 21, 1984.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Interview 1.4.1984_kurz.mp3",
    originalUrl: "",
  },
  {
    id: "04",
    slug: "finissage-liz",
    title: "Finissage – Liz",
    description:
      "Liz Mennel erinnert sich in der allerletzten Sendung zurück an die Anfänge von Radio Riesbach. Datum: 24.03.1991.",
    descriptionEn:
      "In the very last episode, Liz Mennel looks back on the early days of Radio Riesbach. Date: March 24, 1991.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Finissage_Liz_kurz.mp3",
    originalUrl: "#",
  },
  {
    id: "08",
    slug: "50-sendung-quartierjournal",
    title: "50. Sendung – Quartierjournal",
    description: "Quartierjournal von Stefan Schmid, Datum: 21.10.1984.",
    descriptionEn: "Quartierjournal written by Stefan Schmid. Date: October 21, 1984.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_50. Sendung_Quartierjournal.mp3",
    originalUrl: "#",
  },
  {
    id: "12",
    slug: "signet",
    title: "Signet",
    description:
      "Das Signet von Radio Riesbach, das zu Beginn jeder Sendung gespielt wurde. Komponiert von Benjamin Fehr.",
    descriptionEn:
      "The Radio Riesbach jingle, which was played at the beginning of every broadcast. Composed by Benjamin Fehr.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Signet.mp3",
    originalUrl: "#",
  },
  {
    id: "13",
    slug: "finissage-peter",
    title: "Finissage – Peter",
    description:
      "Peter Detsch erzählt in der allerletzten Sendung wie das ursprüngliche Konzessionsgesuch zustande kam. Datum: 24.03.1991.",
    descriptionEn:
      "In the very last episode, Peter Detsch explains how the original license application came about. Date: March 24, 1991.",
    image: "/images/placeholder_audioplayer_radio.png",
    src: "/audio/RR_Finissage_Peter_kurz.mp3",
    originalUrl: "#",
  },
];
