/**
 * Single source of truth for site content.
 * Edit copy, services, and contact details here — components read from this.
 *
 * Fictional placeholder content — loosely inspired by a real glazier's site
 * for structure/tone only. No real names, addresses, or numbers. Replace these
 * placeholders with the actual client's details before launch.
 */

export const site = {
  name: "Glaserei Mustermann",
  trade: "Glaserhandwerk",
  tagline: "Glas in Meisterhand",
  description:
    "Ihr Meisterbetrieb für Glaserhandwerk — von Fenster und Tür über Glasarbeiten und Sicherheit bis zum 24/7-Notdienst. Maßgefertigt, sauber montiert, termintreu.",
  since: "2000",
  region: "Musterstadt & Umgebung",
  phone: "030 123456-0",
  phoneHref: "tel:+4930123456",
  emergencyPhone: "0170 1234567",
  emergencyHref: "tel:+491701234567",
  email: "info@glaserei-mustermann.de",
  address: {
    street: "Musterstraße 12",
    city: "12345 Musterstadt",
  },
  hours: "Mo–Do 7:30–16:30 · Fr 7:30–13:30",
  // Project author — shown in the footer copyright line.
  author: "Jerome Alexander Traugott Grassnick",
} as const;

export type Service = {
  title: string;
  description: string;
  icon:
    | "window"
    | "door"
    | "glass"
    | "shield"
    | "wrench"
    | "bug"
    | "bolt"
    | "alert";
};

export const services: Service[] = [
  {
    title: "Fenster",
    description:
      "Maßgefertigte Fenster mit hoher Energieeffizienz und sauberer Verarbeitung.",
    icon: "window",
  },
  {
    title: "Türen & Tore",
    description:
      "Haustüren, Ganzglastüren, Hebeschiebetüren und Sektionaltore nach Maß.",
    icon: "door",
  },
  {
    title: "Glasarbeiten",
    description: "Spiegel, Vitrinen, Glasduschen und Glasfassaden — präzise gefertigt.",
    icon: "glass",
  },
  {
    title: "Sicherheit",
    description:
      "Einbruchhemmende Verglasung und sichere Verriegelung für Ihr Zuhause.",
    icon: "shield",
  },
  {
    title: "Reparatur & Wartung",
    description:
      "Beschläge richten, Dichtungen erneuern, Funktion prüfen — schnell erledigt.",
    icon: "wrench",
  },
  {
    title: "Insektenschutz",
    description:
      "Spannrahmen, Drehrahmen und Schiebeanlagen, auf Wunsch mit Pollenschutz.",
    icon: "bug",
  },
  {
    title: "Rollladen",
    description:
      "Mehr Wärme- und Einbruchschutz, optional mit Smart-Home-Anbindung.",
    icon: "bolt",
  },
  {
    title: "24h Notdienst",
    description:
      "Glasbruch, Einbruch oder Sturm? Wir sichern schnell und zuverlässig.",
    icon: "alert",
  },
];

export const stats = [
  { value: "25+", label: "Jahre Erfahrung" },
  { value: "10+", label: "Spezialisten im Team" },
  { value: "24/7", label: "Notdienst" },
  { value: "5 J.", label: "Garantie auf Montage" },
];

export const steps = [
  {
    title: "Anfrage & Aufmaß",
    description:
      "Sie melden sich — wir kommen vorbei, messen präzise auf und beraten zu Glasart und Sicherheit.",
  },
  {
    title: "Festpreis-Angebot",
    description:
      "Sie erhalten ein transparentes Angebot ohne versteckte Kosten, auf Wunsch inkl. BAFA-/KfW-Förderung.",
  },
  {
    title: "Fertigung & Montage",
    description:
      "Wir fertigen maßgenau und montieren sauber — mit Schutz für Boden und Möbel, ohne Baustellen-Chaos.",
  },
];
