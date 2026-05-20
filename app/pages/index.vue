<template>
  <main>
    <TheHero src="/images/hero.png" :alt="$t('hero.subtitle')" />

    <div
      ref="mobileContentsAnchor"
      class=""
      :style="mobileContentsPinned ? { height: `${mobileContentsHeight}px` } : undefined"
    >
      <aside
        ref="mobileContentsEl"
        class="border-y border-black-coffee/15 bg-warm-white px-6 py-4 lg:hidden"
        :class="mobileContentsPinned ? 'fixed left-0 right-0 z-40' : 'relative z-30'"
        :style="mobileContentsPinned ? { top: 'var(--nav-height, 4.5rem)' } : undefined"
      >
        <details class="group" @toggle="updateMobileContentsState">
          <summary
            class="headline-strip headline-strip--section inline-flex cursor-pointer list-none items-center gap-3"
          >
            <span>{{ contentsLabel }}</span>
            <span
              aria-hidden="true"
              class="text-sm leading-none group-open:hidden"
              >+</span
            >
            <span
              aria-hidden="true"
              class="hidden text-sm leading-none group-open:inline"
              >-</span
            >
          </summary>
          <nav aria-label="Contents" class="mt-5">
            <ul class="space-y-3 text-sm leading-relaxed">
              <li v-for="section in homeSections" :key="section.id">
                <a
                  :href="`#${section.id}`"
                  class="!text-black-coffee underline decoration-black-coffee underline-offset-2 transition-colors hover:!text-riesbach-rot hover:decoration-riesbach-rot"
                >
                  {{ section.label }}
                </a>
              </li>
            </ul>
          </nav>
        </details>
      </aside>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-3"
    >
      <aside
        v-if="desktopContentsVisible"
        class="fixed z-30 hidden w-64 lg:block"
        :style="{
          top: 'calc(var(--nav-height, 4.5rem) + 4.75rem)',
          right: 'max(3rem, calc((100vw - 80rem) / 2))'
        }"
      >
        <div class="space-y-5">
          <h2
            class="headline-strip headline-strip--section block w-fit ml-auto"
          >
            {{ contentsLabel }}
          </h2>
          <nav aria-label="Contents">
            <ul class="space-y-3 text-right text-sm leading-relaxed">
              <li v-for="section in homeSections" :key="section.id">
                <a
                  :href="`#${section.id}`"
                  class="!text-black-coffee underline decoration-black-coffee underline-offset-2 transition-colors hover:!text-riesbach-rot hover:decoration-riesbach-rot"
                >
                  {{ section.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </Transition>

    <section id="begruessung" class="px-6 py-20 md:px-12">
      <div
        class="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16"
      >
        <div class="max-w-4xl scroll-mt-32 space-y-10">
          <p
            v-for="(paragraph, index) in introParagraphs"
            :key="index"
            class="text-[16px] leading-[1.75] tracking-[0.01em] text-black-coffee"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="hidden lg:block" />
      </div>
    </section>

    <section
      v-for="section in introSections"
      :id="section.id"
      :key="section.id"
      class="px-6 py-12 md:px-12"
    >
      <div
        class="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16"
      >
        <div class="max-w-4xl scroll-mt-32 space-y-6">
          <h2 class="headline-strip headline-strip--subsection mb-5">
            {{ section.label }}
          </h2>
          <div class="space-y-8">
            <p
              v-for="(paragraph, index) in section.paragraphs"
              :key="index"
              class="text-[16px] leading-[1.75] tracking-[0.01em] text-black-coffee"
              :class="section.emphasisIndex === index ? 'italic' : ''"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
        <div class="hidden lg:block" />
      </div>
    </section>

    <section id="reinhoeren" class="px-6 py-12 overflow-hidden md:px-12">
      <div
        class="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16"
      >
        <div class="min-w-0">
          <h2 class="headline-strip headline-strip--subsection mb-8">
            {{ audioHeading }}
          </h2>
          <div class="space-y-8">
            <p
              class="max-w-4xl text-[16px] leading-[1.75] tracking-[0.01em] text-black-coffee"
            >
              {{ audioBody }}
            </p>
            <AudioSlider :clips="audioClips" />
          </div>
        </div>
        <div class="hidden lg:block" />
      </div>
    </section>

    <section id="abschiedssendung" class="px-6 py-12 md:px-12">
      <div
        class="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16"
      >
        <div class="max-w-4xl scroll-mt-32 space-y-6">
          <h2 class="headline-strip headline-strip--subsection mb-5">
            {{ farewellLabel }}
          </h2>
          <p
            class="text-[16px] leading-[1.75] tracking-[0.01em] text-black-coffee"
          >
            {{ farewellBody }}
          </p>
        </div>
        <div class="hidden lg:block" />
      </div>
    </section>

    <section id="abschiedssendung-video" class="px-6 md:px-12 pb-16">
      <div
        class="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16"
      >
        <div class="max-w-4xl">
          <div class="overflow-hidden bg-black-coffee/10">
            <video
              controls
              playsinline
              preload="metadata"
              class="block w-full h-auto"
            >
              <source :src="videoSrc" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="hidden lg:block" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { locale, tm, rt } = useI18n();
import { audioClips } from "~/data/audioClips";

const videoSrc = "/video/radio_riesbach_compressed.mp4";
const mobileContentsAnchor = ref<HTMLElement | null>(null);
const mobileContentsEl = ref<HTMLElement | null>(null);
const mobileContentsPinned = ref(false);
const mobileContentsHeight = ref(0);
const desktopContentsVisible = ref(false);

function getNavHeight() {
  const navHeight = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-height");

  return Number.parseFloat(navHeight) || 72;
}

async function updateMobileContentsState() {
  await nextTick();

  const anchor = mobileContentsAnchor.value;
  const menu = mobileContentsEl.value;
  if (!anchor || !menu) return;

  mobileContentsHeight.value = menu.offsetHeight;
  const hasReachedNav = anchor.getBoundingClientRect().top <= getNavHeight();
  const footer = document.querySelector('footer');
  const footerIsNear = footer
    ? footer.getBoundingClientRect().top <= window.innerHeight - 32
    : false;

  mobileContentsPinned.value = hasReachedNav;
  desktopContentsVisible.value = hasReachedNav && !footerIsNear;
}

onMounted(() => {
  updateMobileContentsState();
  window.addEventListener("scroll", updateMobileContentsState, { passive: true });
  window.addEventListener("resize", updateMobileContentsState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateMobileContentsState);
  window.removeEventListener("resize", updateMobileContentsState);
});

const homeSections = computed(() => [
  {
    id: "begruessung",
    label: locale.value === "en" ? "Introduction" : "Begrüssung",
  },
  {
    id: "quartier",
    label:
      locale.value === "en"
        ? "A Radio From The Neighborhood"
        : "Ein Radio aus dem Quartier",
    emphasisIndex: 0,
    paragraphs:
      locale.value === "en"
        ? [
            "Switzerland’s first community radio station broadcast from the Gemeinschaftszentrum Riesbach between 1984 and 1991.",
            "When Radio Riesbach first went on the air on April 1, 1984, it was met with doubt. The idea of a small community radio station was nice, but could it actually work? Absolutely! Over the next seven years, the station could be heard twice a week for one to two hours. Anyone who tuned their radio to the right frequency on Thursday evenings or Sunday afternoons could hear what was happening in the neighborhood. That’s because every broadcast began with the “Quartierjournal,” a roundup of the most important events and information for the area between Tiefenbrunnen, Bellevue, the lakefront, and Klusplatz.",
            "The programs were created by about a dozen neighborhood residents, some more involved than others, who, until then, had little to no broadcasting experience. Everyone worked for the radio station on a volunteer basis. There was an editorial group that met every two weeks to set the upcoming schedule. And a technical group that ensured all programs were properly recorded and broadcast. Radio Riesbach’s studio was located on the first floor of the Gemeinschaftszentrum, with the antenna on the rooftop.",
            "The neighborhood radio station was supported by an association that had between 140 and 180 members over the years. The 30 francs each member paid annually were an important source of income, as Radio Riesbach was completely ad-free. In addition, there were donations, patron contributions, and earnings from flea markets and festivals. But finances were rather tight, as the radio station had to pay not only for operating and material costs but also for fees to use the broadcast frequency and to air music.",
            "Radio Riesbach aspired to be a listener-driven radio station, from the neighborhood, by and for the neighborhood. The editorial team encouraged local residents to create their own programs with their assistance. Over the years, they experimented also with various formats. Radio Riesbach broadcast interviews and group discussions, recorded sounds from neighborhood walks, spoke with residents about their childhood in the neighborhood, and interviewed them on current topics right on the street. Sometimes they even broadcasted from outside the studio, from a meadow, the lakeside, or, during live broadcasts lasting several hours, from the “Swiss Radio and Television Exhibition” at the Zurich Kongresshaus.",
            "The creators dreamed of expanding the Radio Riesbach model to other neighborhoods in the city. To do so, they intended to lend their broadcast frequency to other neighborhood radio stations on days when Radio Riesbach was not broadcasting. Unfortunately, the “Radio mobil” concept was never realized. And the desired level of participation from their own neighborhood also fell short of expectations. After the core team had searched in vain for new, dedicated radio voices, they announced in the spring of 1990 that they would not apply for a new broadcasting license. A few months before the station went off the air, all of the recording equipment was stolen, but the radio producers did not give up.",
            "After 709 broadcasts, the Radio Riesbach team bid farewell to the airwaves at the end of March 1991 with a big closing party at the GZ. Fortunately, all the broadcasts were recorded, and some of them have been preserved. So today we can listen to what this unique radio project and the turbulent 1980s in the neighbourhood sounded like.",
          ]
        : [
            "Als Radio Riesbach am 1. April 1984 auf Sendung ging, waren viele skeptisch.",
            "Die Idee eines solchen Kleinstradios war ja schön, aber liess sich das überhaupt umsetzen? Und wie: In den folgenden sieben Jahren war der Sender zwei Mal die Woche für ein bis zwei Stunden zu hören. Wer Donnerstagabends oder Sonntagmittags sein Radiogerät auf der richtigen Frequenz einstellte, konnte hören, was aktuell im Quartier lief. Denn jede Sendung begann mit dem «Quartierjournal», einer Zusammenstellung der wichtigsten Veranstaltungen und Informationen für das Gebiet zwischen Tiefenbrunnen, Bellevue, Seeufer und Klusplatz.",
            "Gemacht wurden die Sendungen von etwa einem Dutzend mehr oder weniger involvierter Quartierbewohner:innen, die bis dahin noch keine oder kaum Radioerfahrung hatten. Alle waren ehrenamtlich für das Radio im Einsatz. Es gab eine Redaktionsgruppe, die sich alle zwei Wochen traf und das anstehende Programm festlegte. Und eine Technik-Gruppe, die dafür sorgte, dass alle Programme richtig aufgenommen und gesendet wurden. Das Studio von Radio Riesbach befand sich im ersten Stock des Gemeinschaftszentrums, auf dem Dach stand die Antenne.",
            "Getragen wurde das Quartierradio von einem Verein, der im Lauf der Jahre zwischen 140 und 180 Mitglieder hatte. Die 30 Franken, die jedes Mitglied pro Jahr bezahlte, waren eine wichtige Einnahmequelle. Denn Radio Riesbach war komplett werbefrei. Dazu kamen Spenden, Gönnerbeiträge und Erlöse aus Flohmärkten und Festen. Aber die Finanzen waren eher knapp, denn das Radio musste neben Betriebs- und Materialkosten auch noch Gebühren für die Nutzung der Sendefrequenz und fürs Ausstrahlen von Musik bezahlen.",
            "Radio Riesbach wollte ein Hörer:innenradio sein, aus dem Quartier, von und für das Quartier. Die Redaktionsgruppe wollte die Quartierbewohner:innen dazu animieren, mit ihrer Hilfe selber Sendungen zu gestalten. Im Laufe der Jahre probierten sie dazu verschiedene Formate aus. Radio Riesbach strahlte Interviews und Gruppengespräche aus, nahm Töne von Spaziergängen auf, sprach mit Anwohner:innen über ihre Kindheit im Quartier und befragte sie zu aktuellen Themen auf der Strasse. Manchmal wurde auch von ausserhalb des Studios gesendet, von einer Wiese, vom Seeufer oder, in mehrstündigen Live-Sendungen, von der «Schweizerischen Radio- und Fernsehausstellung» aus dem Zürcher Kongresshaus.",
            "Die Macher:innen träumten davon, das Modell von Radio Riesbach auch auf andere Quartiere in der Stadt auszudehnen. Dazu wollten sie ihre Frequenz an den Tagen, an denen Radio Riesbach nicht sendete, anderen Quartierradios ausleihen. Verwirklicht wurde das «Radio mobil»-Konzept leider nie. Und auch die gewünschte Beteiligung aus dem eigenen Quartier blieb kleiner als erhofft. Nachdem das Kernteam vergeblich nach neuen, engagierten Radiostimmen gesucht hatte, verkündete es im Frühjahr 1990, keine neue Sendeerlaubnis zu beantragen. Wenige Monate vor Sendeschluss wurde die gesamte Aufnahmeausrüstung gestohlen, aber die Radiomacher:innen liessen sich nicht entmutigen.",
            "Nach 709 Sendungen verabschiedete sich das Radio-Riesbach-Team Ende März 1991 mit einem grossen Abschlussfest im GZ aus dem Äther. Glücklicherweise wurden alle Sendungen aufgenommen und ein Teil davon ist erhalten geblieben. So können wir heute reinhören, wie sich dieses einzigartige Radioprojekt und die bewegten 1980er-Jahre im Quartier angehört haben.",
          ],
  },
  {
    id: "aufnehmen",
    label:
      locale.value === "en" ? "Record and broadcast" : "Aufnehmen und senden",
    emphasisIndex: 0,
    paragraphs:
      locale.value === "en"
        ? [
            "This is how the station's programming made its way from the studio at the GZ to homes in Riesbach.",
            "Radio Riesbach's goal was to be a listener-focused station. That's why the radio producers repeatedly introduced their audience to the inner workings of their field: what the studio looked like, where the antenna was located, who the people behind the sound boards were, and the technical terms they used to communicate with one another.",
            "Radio Riesbach was broadcast via ultra-shortwave (FM). In the second half of the 20th century, FM became the most important and widely used transmission medium for radio broadcasting in Switzerland. Compared to long, medium, and short waves, which had been used for radio broadcasting earlier, FM's reach is significantly smaller. However, the quality is generally better because the waves are less prone to interference. The number of available frequencies is limited, meaning that anyone wishing to broadcast via FM must apply to the government for a frequency license. This is exactly what Radio Riesbach did, and it was granted a so-called Konzession.",
            "The transmission capacity of the Radio Riesbach antenna was regulated and limited to the area between Tiefenbrunnen, the lakefront, Bellevue, and Klusplatz. A complaint filed by the Swiss Post, Telephone, and Telegraph Administration (PTT; the state-owned company was responsible for broadcasting infrastructure at the time) shows that compliance with the regulations was monitored. However, the radio producers recall that Radio Riesbach could also be tuned in to on the other side of the lake.",
            'Anyone with an older radio can still receive FM broadcasts today by tuning to the "FM" setting. For years, there has been discussion about ending FM operations in Switzerland and switching entirely to digital radio and internet radio. However, the originally planned end of FM service for late 2026 was recently postponed to 2031.',
          ]
        : [
            "So gelangte das Programm aus dem Studio im GZ in die Riesbacher Haushalte.",
            "Radio Riesbach wollte ein Hörer:innen-Radio sein. Deshalb zeigten die Radiomacher:innen ihrem Publikum immer wieder, wie ihr Handwerk funktionierte: Wie es im Studio aussah, wo die Antenne stand, wer die Menschen hinter den Mischpulten waren und mit welchen Fachbegriffen sie sich verständigten.",
            "Gesendet wurde Radio Riesbach über Ultrakurzwelle (UKW). UKW entwickelte sich in der zweiten Hälfte des 20. Jahrhunderts zum wichtigsten und meist genutzten Verbreitungsweg für Radio in der Schweiz. Im Vergleich zu Lang-, Mittel- und Kurzwellen, über die schon früher Radio gesendet wurde, ist die Reichweite von UKW zwar deutlich geringer. Dafür ist die Qualität in der Regel besser, weil die Wellen weniger störungsanfällig sind. Die Zahl der verfügbaren Frequenzen ist begrenzt. Wer über UKW senden möchte, muss beim Staat die Nutzung einer Frequenz beantragen. Genau das tat auch Radio Riesbach und erhielt eine sogenannte Konzession.",
            "Die Sendeleistung der Radio-Riesbach-Antenne war reguliert und auf das Gebiet zwischen Tiefenbrunnen, Seeufer, Bellevue und Klusplatz beschränkt. Die Beschwerde der schweizerischen Post-, Telefon- und Telegrafenbetriebe (PTT; das staatliche Unternehmen war in dieser Zeit unter anderem für die Sendeinfrastruktur zuständig) zeigt, dass das Einhalten der Vorgaben kontrolliert wurde. Die Radiomacher:innen erinnern sich aber daran, dass Radio Riesbach auch auf der anderen Seeseite empfangen werden konnte.",
            "Wer ein älteres Radiogerät besitzt, kann auch heute noch UKW-Sendungen über die Einstellung «FM» empfangen. Seit Jahren wird darüber diskutiert, den UKW-Betrieb in der Schweiz zu beenden und ganz auf digitales Radio und Internetradio zu setzen. Das eigentlich beschlossene UKW-Aus für Ende 2026 wurde jüngst allerdings auf 2031 verschoben.",
          ],
  },
  {
    id: "radioversuch",
    label:
      locale.value === "en"
        ? "The Swiss Radio Experiment"
        : "Der Schweizer Radioversuch",
    emphasisIndex: 0,
    paragraphs:
      locale.value === "en"
        ? [
            "The Riesbach community radio station had to adhere to strict rules and was subject to scientific monitoring. This was because it was part of a national pilot program. The Federal Council sought to determine whether and how private radio stations could operate in Switzerland.",
            "Until the early 1980s, the only officially recognized radio stations in Switzerland were those belonging to the Swiss Radio and Television Corporation (SRG).",
            "However, at least since the 1970s, so-called “pirate stations” had been increasingly challenging this monopoly. Dedicated radio producers “hijacked” existing broadcast frequencies to air their own programs and especially music until the stations were located, shut down, confiscated, or jammed by the authorities.",
            "“Radio 24” received a great deal of attention in this context. Starting in 1979, the ad-supported music radio station broadcast from the summit of an Italian mountain, near the Swiss border, all the way to Zurich. In 1982, after years of a cat-and-mouse game with pirate stations and growing public pressure, the Swiss government decided to open the radio market to private providers in a carefully controlled manner. Interested parties could apply for one of the few available licenses: a temporary permit to broadcast as a private radio station in a specific area of Switzerland.",
            "Many applied and one of the more than 200 applications came from the Riesbach neighborhood. And this application went through. By the summer of 1983, Radio Riesbach was one of 36 stations authorized to broadcast legally in Switzerland starting in the fall of that same year.",
          ]
        : [
            "Das Riesbacher Quartierradio musste sich an genaue Regeln halten und es wurde wissenschaftlich begleitet. Denn es war Teil einer nationalen Versuchsanordnung. Damit wollte der Bundesrat herausfinden, ob und wie es in der Schweiz private Radiosender geben könnte.",
            "Bis Anfang der 1980er-Jahre gab es in der Schweiz offiziell nur Radiosender, die zur Schweizerischen Radio- und Fernsehgesellschaft (SRG) gehörten.",
            "Doch spätestens seit den 1970er-Jahren forderten sogenannte «Piratensender» diese Sendehoheit immer stärker heraus. Engagierte Radiomacher:innen «kaperten» vorhandene Sendefrequenzen für ihre eigenen Programme und vor allem für Musik, bis die Sender von den Behörden gefunden, gestoppt, beschlagnahmt oder gestört wurden.",
            "Viel Aufmerksamkeit erhielt dabei «Radio 24». Seit 1979 sendete das werbefinanzierte Musikradio vom Gipfel eines italienischen Berges, nahe der Schweizer Grenze, bis nach Zürich. 1982 entschied die Schweizer Regierung nach Jahren des Katz-und-Maus-Spiels mit den Piratensendern und wachsendem Druck aus der Bevölkerung, den Radiomarkt ganz vorsichtig und kontrolliert für private Anbieter zu öffnen. Interessierte konnten sich für eine der wenigen zur Verfügung stehenden Konzessionen bewerben, also für die zeitlich befristete Genehmigung, als Privatradio in einem bestimmten Gebiet der Schweiz zu senden.",
            "Das Interesse war gross. Eines der über 200 Gesuche kam aus dem Quartier Riesbach. Und dieses Gesuch wurde angenommen. Im Sommer 1983 gehörte Radio Riesbach zu einem von 36 Radios, die ab Herbst 1983 in der Schweiz legal senden durften.",
          ],
  },
  { id: "reinhoeren", label: locale.value === "en" ? "Listen" : "Reinhören" },
  {
    id: "abschiedssendung",
    label:
      locale.value === "en"
        ? "Farewell Broadcast Of March 24, 1991"
        : "Abschiedssendung vom 24. März 1991",
  },
]);

const introSections = computed(() =>
  homeSections.value.filter((section) =>
    ["quartier", "aufnehmen", "radioversuch"].includes(section.id),
  ),
);

const farewellLabel = computed(() =>
  locale.value === "en"
    ? "Farewell Broadcast Of March 24, 1991"
    : "Abschiedssendung vom 24. März 1991",
);

const farewellBody = computed(() =>
  locale.value === "en"
    ? "Radio Riesbach’s final broadcast was transmitted live from the Gemeinschaftszentrum Riesbach. A local TV station was there as well and filmed the event. Members of the Radio Riesbach team who speak are Liz Mennel, Beat Ramseier, Erwin Detsch, Peter Detsch, Dani Thyssen, and Stefan Schmid."
    : "Die letzte Sendung von Radio Riesbach wurde live aus dem Gemeinschaftszentrum Riesbach gesendet. Ein lokaler TV-Sender war mit dabei und filmte die Veranstaltung. Zu Wort kommen aus dem Radio-Riesbach-Team Liz Mennel, Beat Ramseier, Erwin Detsch, Peter Detsch, Dani Thyssen und Stefan Schmid.",
);

const contentsLabel = computed(() =>
  locale.value === "en" ? "Overview" : "Übersicht",
);

const sectionLorem = computed(
  () =>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
);

const audioHeading = computed(() =>
  locale.value === "en" ? "Listen" : "Reinhören",
);

const audioBody = computed(() =>
  locale.value === "en"
    ? "Get an idea of what Radio Riesbach and the neighborhood sounded like in the 1980s. Here you’ll find a selection of short audio clips that were broadcast between 1984 and 1991 – via a link below you can get to the archived version of the program and listen it in full length."
    : "Verschaffen Sie sich einen Eindruck davon, wie sich Radio Riesbach und die 1980er-Jahre im Quartier anhörten. Hier finden Sie eine Auswahl an Stimmen, die zwischen 1984 und 1991 gesendet wurden – über den Link unterhalb jeder Aufzeichnung gelangen Sie zur dazugehörigen Sendung und können diese in voller Länge nachhören.",
);

const introParagraphs = computed(() =>
  (tm("home.introParagraphs") as unknown[]).map((paragraph) => rt(paragraph)),
);
</script>
