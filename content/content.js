/**
 * content.js – Alle Texte & Inhalte der Website
 * Hier können Texte, Links und Daten zentral gepflegt werden.
 */

const SITE_CONTENT = {

  meta: {
    title: "Dennis Mehlich – Professionelle Websites mit HTML & KI",
    description: "Webdesigner aus Chemnitz. KI-gestützte Websites mit HTML, CSS & JS. Keine CMS-Overhead, maximale Performance.",
    author: "Dennis Mehlich"
  },

  contact: {
    name: "Dennis Mehlich",
    email: "dennis.mehlich@icloud.com",
    phone: "+49 176 84888105",
    address: "Wolkensteiner Str. 21, 09120 Chemnitz",
    role: "Webdesigner · KI & HTML · Prozessdesigner"
  },

  nav: {
    links: [
      { label: "Home",       href: "#hero" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Über uns",   href: "#ueber-mich" },
      { label: "Kontakt",    href: "#kontakt" }
    ],
    cta: "Termin buchen"
  },

  hero: {
    badge: "Webdesigner · KI-gestützt · Chemnitz",
    headline: "Professionelle Websites, die <em>wirklich</em> überzeugen",
    subline: "Ihre Mitbewerber haben eine Website. Sie bekommen eine, die verkauft. Mit klarer Botschaft, starkem Design und einer Struktur, die Nutzer gezielt führt – und aus Besuchern Anfragen macht.",
    ctaPrimary: "Termin buchen",
    ctaSecondary: "Leistungen ansehen",
    stats: [
      { num: "100%", label: "HTML · KI-gebaut" },
      { num: "5+",   label: "Jahre Erfahrung" },
      { num: "∞",    label: "Skalierbar" }
    ],
    badges: [
      { icon: "🚀", text: "Live in 2 Wochen" },
      { icon: "✅", text: "SEO-optimiert" }
    ]
  },

  includes: [
    { icon: "📸", title: "Professionelle Fotos",   desc: "Passende Stockfotos oder Bildrecherche für jede Section – inklusive" },
    { icon: "✍️", title: "Texte & Copywriting",    desc: "Überzeugender Seitentext, der Ihre Zielgruppe anspricht" },
    { icon: "🎨", title: "Individuelles Design",   desc: "Bewährte Struktur, konsequent auf Ihre Marke, Zielgruppe und Ziele zugeschnitten" },
    { icon: "📱", title: "Responsive & Mobil",     desc: "Perfekte Darstellung auf Smartphone, Tablet und Desktop" },
    { icon: "🔒", title: "SSL & DSGVO",            desc: "Sicheres Hosting-Setup und rechtskonforme Grundkonfiguration" },
    { icon: "🚀", title: "Launch & Einweisung",    desc: "Persönliche Übergabe + 30 Tage Support nach dem Go-live" }
  ],

  services: {
    label: "Leistungen",
    headline: "Was ich für Sie tue –\nvon der Idee bis zum Launch",
    subline: "Ich begleite Sie durch den gesamten Prozess. Gutes Webdesign beginnt mit den richtigen Fragen – verstehen, bevor man gestaltet.",
    items: [
      { icon: "🎨", title: "Modernes Webdesign",         desc: "Sauberer Programmiercode, KI-gestützt entwickelt. Schnelle Ladezeiten, keine unnötigen Extras – was zählt ist wie Ihre Website wirkt und performt." },
      { icon: "📱", title: "Responsive Development",     desc: "Ihre Website sieht auf jedem Gerät perfekt aus – vom Smartphone bis zum Desktop-Monitor. Mobile-First von Anfang an." },
      { icon: "🔍", title: "SEO-Optimierung",            desc: "Technische SEO, Keyword-Recherche und saubere Seitenstruktur. Damit Sie von potenziellen Kunden gefunden werden." },
      { icon: "⚡", title: "Performance & Speed",        desc: "Schnelle Ladezeiten sind kein Luxus – sie sind Pflicht. Optimierte Bilder, sauberer Code und effiziente Hosting-Setups." },
      { icon: "🔒", title: "Sicherheit & Wartung",       desc: "Regelmäßige Updates, Backups und Sicherheitsmonitoring. Damit Sie sich um Ihr Kerngeschäft kümmern können." },
      { icon: "🎁", title: "Mystery Box",                desc: "KI-gestützte Features, die Ihre Website von anderen abheben – was genau? Das erfahren Sie im Erstgespräch. Spoiler: Es lohnt sich.", cta: "Neugierig? Termin buchen →", dark: true },
      { icon: "🔗", title: "Digitale Kundenverwaltung",  desc: "Jede Anfrage über Ihre Website landet automatisch in Ihrem Kundenmanagement-System – mit allen relevanten Daten. Kein manuelles Nachpflegen, keine verlorenen Anfragen. Sie wissen sofort wer sich meldet und was gebraucht wird." }
    ]
  },

  approach: {
    label: "Mein Ansatz",
    headline: "Kein CMS-Overhead –\nsauberer Code, maximale Performance",
    subline: "Ich baue Websites mit HTML, CSS und JavaScript – KI-gestützt entwickelt. Kein Content-Management-System, keine unnötigen Abhängigkeiten, kein Ballast. Nur das, was Ihre Website wirklich braucht.",
    reasons: [
      { icon: "⚡", title: "Maximale Performance",          text: "Reiner HTML/CSS/JS Code lädt blitzschnell – keine Datenbankanfragen, keine Plugin-Konflikte, keine unnötige Last. Google liebt das, Ihre Besucher auch." },
      { icon: "🤖", title: "KI-gestützt entwickelt",        text: "Mit KI entstehen Websites schneller, präziser und kosteneffizienter als je zuvor. Änderungen lassen sich jederzeit punktgenau einpflegen – ohne Umwege über ein Backend." },
      { icon: "🔒", title: "Sicherer by Default",           text: "Statische HTML-Seiten bieten keine Angriffsfläche. Keine Login-Seite, keine Datenbank, keine bekannten Schwachstellen. Sicherheit ist hier kein Plugin – sie ist Architektur." },
      { icon: "🔗", title: "Schnittstellen trotzdem möglich", text: "HubSpot, Kalender, Formulare, Analytics – all das lässt sich sauber per Embed oder API einbinden. Ihre Website als schlanker, leistungsstarker Knotenpunkt." },
      { icon: "💶", title: "Keine laufenden Lizenzkosten",  text: "Kein Hosting-Abo, keine Plugin-Lizenzen, keine Update-Pflicht. Sie zahlen einmal für eine Website, die läuft – und läuft – und läuft." },
      { icon: "📈", title: "SEO-technisch sauber",          text: "Semantisch korrekter Code, schnelle Ladezeiten und klare Struktur sind die beste SEO-Grundlage, die es gibt – ohne ein einziges Plugin." }
    ],
    tableTitle: "Warum kein CMS? Das ist der Unterschied.",
    tableHeaders: ["", "Mein Ansatz", "CMS-Lösungen"],
    tableRows: [
      ["Ladegeschwindigkeit", "✅ Blitzschnell",         "⚠️ Oft eingeschränkt"],
      ["Sicherheit",          "✅ Keine Angriffsfläche", "⚠️ Regelmäßige Updates nötig"],
      ["Laufende Kosten",     "✅ Keine",                "❌ Abo- & Lizenzpflicht"],
      ["Integrationen",       "✅ Per Embed & API",      "⚠️ Plugin-abhängig"],
      ["Anpassbarkeit",       "✅ Vollständig",          "⚠️ Template-Grenzen"],
      ["SEO-Basis",           "✅ Sauber by Default",    "⚠️ Plugin erforderlich"]
    ]
  },

  process: {
    label: "Mein Prozess",
    headline: "Gutes Webdesign beginnt mit den richtigen Fragen",
    subline: "Webdesign bedeutet für mich: verstehen, bevor man gestaltet. Ich arbeite eng mit meinen Kunden zusammen – vom ersten Gespräch bis zur fertigen Website treffen wir jede Entscheidung auf fundierten Erkenntnissen, nicht auf Annahmen.",
    steps: [
      { num: "01", title: "Erstgespräch & Analyse",   desc: "Wir sprechen über Ihre Ziele, Ihre Zielgruppe und was Ihre aktuelle Website vielleicht nicht leistet." },
      { num: "02", title: "Konzept & Wireframes",     desc: "Auf Basis unseres Gesprächs erstelle ich ein strukturiertes Konzept mit klarer Nutzerführung." },
      { num: "03", title: "Design & Entwicklung",     desc: "Die Website nimmt Gestalt an – sauberer HTML/CSS/JS Code, KI-gestützt entwickelt, responsiv und schnell." },
      { num: "04", title: "Review & Launch",          desc: "Gemeinsame Abnahme, letzte Feinabstimmungen – dann geht Ihre neue Website live." }
    ],
    deliverables: [
      "Saubere HTML/CSS/JS Website ohne CMS-Overhead",
      "Responsive Design für alle Geräte",
      "SEO-Grundoptimierung inklusive",
      "DSGVO-konformes Setup",
      "Kontaktformular & Google Maps",
      "SSL-Zertifikat & Sicherheits-Setup",
      "Einweisung & Übergabe",
      "30 Tage Support nach Launch"
    ]
  },

  about: {
    label: "Über uns",
    headline: "Daten verstehen.\nWebsites, die wirken.",
    bio: [
      "Ich bin Dennis Mehlich – Webdesigner mit einem Fundament, das über Design weit hinausgeht. Als Prozessdesigner bei publicplan habe ich im Rahmen des Online-Zugangsgesetzes (OZG) gelernt, Formulare und digitale Prozesse so zu gestalten, dass sie Nutzer gezielt führen, die richtigen Daten erheben und Entscheidungen auf fundierten Kriterien basieren – nicht auf Bauchgefühl.",
      "Dieses Wissen fließt direkt in jede Website ein, die ich baue: Eine gute Website ist nicht nur Visitenkarte – sie ist ein <strong>aktives Werkzeug zur Leadgenerierung</strong>. Das Kontaktformular qualifiziert Interessenten bereits beim Ausfüllen. Sie wissen sofort: Wer meldet sich? Was wird gesucht? Wie groß ist das Projekt?"
    ],
    thesis: {
      label: "🎓 Bachelor-Thesis",
      title: "Evaluierung der Erfolgsfaktoren einer Webpräsenz zur nachhaltigen Umsatzsteigerung",
      sub: "FOM Hochschule · BWL & Wirtschaftspsychologie"
    },
    skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "SEO", "UI/UX", "Analytics", "SQL", "KPI"],
    experience: [
      {
        title: "Professional Prozessdesigner", period: "2023",
        company: "publicplan GmbH · Düsseldorf",
        desc: "Einarbeitung neuer Kollegen im Bereich Formularentwicklung OZG. Weitergabe von Prozesswissen und internen Standards.",
        tags: ["OZG", "Onboarding", "Prozessdesign"]
      },
      {
        title: "Junior Prozessdesigner", period: "2022–2023",
        company: "publicplan GmbH · Düsseldorf",
        desc: "Mitwirkung im Online-Zugangsgesetz-Projekt. Formularentwicklung mit form.io, JavaScript-Komponenten, Präsentationen in Workshops.",
        tags: ["JavaScript", "form.io", "Jira", "Confluence"]
      },
      {
        title: "Selbstständiger Webdesigner", period: "2021–2022",
        company: "Freiberuflich · Düsseldorf",
        desc: "Erstellung und Veröffentlichung von Websites für Handwerksunternehmen. Umsetzung mit HTML, CSS, JS und PHP.",
        tags: ["HTML", "CSS", "PHP", "Webdesign"]
      },
      {
        title: "Fachassistent Statistik", period: "2016–2017",
        company: "Bundesagentur für Arbeit · Düsseldorf",
        desc: "Statistiken in Excel mit VBA, Qualitätssicherung von Kennzahlen, Kundenkommunikation und PowerPoint-Präsentationen.",
        tags: ["Excel VBA", "KPI", "Metriken"]
      }
    ],
    education: [
      {
        title: "Moderne Webanwendungen mit PHP & MySQL", period: "2021",
        company: "Remote · 4 Monate",
        desc: "PHP 7, MySQL-Datenbanken, OOP-Grundlagen, Laravel (Einsteiger & Fortgeschrittene).",
        tags: ["PHP", "MySQL", "Laravel"]
      },
      {
        title: "UI/UX-Design, Webdesign, SEM Manager", period: "2020",
        company: "Alfatraining · Düsseldorf · 4 Monate",
        desc: "Adobe XD, HTML/CSS/JS, Photoshop, SEO, Keywordrecherche, JSON-LD.",
        tags: ["UI/UX", "Adobe XD", "SEO"]
      },
      {
        title: "BWL & Wirtschaftspsychologie B.Sc.", period: "bis 2020",
        company: "FOM Hochschule · Düsseldorf",
        desc: "BWL, VWL, Markt- & Werbepsychologie, Marketingtrends, Sozialpsychologie.",
        tags: ["BWL", "Psychologie", "Marketing"]
      },
      {
        title: "Web-Master", period: "2019",
        company: "ILS Fernlehrgang · 6 Monate",
        desc: "Netzwerktechnik, TCP/IP, Linux Apache Webserver, Internet-Security.",
        tags: ["Linux", "Apache", "Security"]
      },
      {
        title: "Ausbildung Industriekaufmann", period: "bis 2012",
        company: "Henkel AG & Co. KGaA · Düsseldorf",
        desc: "Site Logistics, Purchase to Pay, Distribution Logistics, Fairs & Exhibitions.",
        tags: ["Logistik", "Kaufmännisch"]
      }
    ]
  },

  cta: {
    label: "Jetzt starten",
    headline: "Bereit für eine Website,\ndie Kunden gewinnt?",
    subline: "Buchen Sie ein kostenloses Erstgespräch. In 30 Minuten analysieren wir Ihre aktuelle Online-Präsenz und zeigen Ihnen konkret, was möglich ist.",
    button: "Termin buchen →",
    calendarText: "Kostenloses Erstgespräch buchen",
    calendarSub: "In 30 Minuten analysieren wir Ihre Online-Präsenz und zeigen, was möglich ist."
  },

  contact_section: {
    label: "Kontakt & Leadgewinnung",
    headline: "Ihre Website fragt.\nSie wissen sofort mehr.",
    text: "Ein gutes Kontaktformular ist kein Pflichtfeld – es ist Ihr erster Vertriebsmitarbeiter. Es führt den Nutzer, qualifiziert ihn und liefert Ihnen alle relevanten Daten, bevor das erste Gespräch stattfindet.",
    ozg: "Im Rahmen des Online-Zugangsgesetzes (OZG) habe ich gelernt, Formulare nach klaren Kriterien zu gestalten: Welche Felder sind wirklich nötig? Unter welchen Bedingungen werden welche Fragen gestellt? Wie führt man einen Nutzer so, dass er die relevanten Daten liefert – ohne Frustration?",
    formTitle: "Projekt anfragen",
    formSub: "Füllen Sie das Formular aus – Ihre Daten landen direkt in meinem System. Am Ende wählen Sie Ihren Wunschtermin.",
    privacy: "🔒 Ihre Daten werden sicher übermittelt und nicht an Dritte weitergegeben.",
    services: [
      "Neue Website von Grund auf",
      "Redesign einer bestehenden Website",
      "Landing Page / Kampagnenseite",
      "HubSpot-Integration / CRM-Anbindung",
      "SEO-Optimierung",
      "Wartung & laufende Betreuung",
      "Sonstiges"
    ],
    budgets: [
      "Lieber nicht angeben",
      "Unter 500 €",
      "500 – 1.000 €",
      "1.000 – 2.500 €",
      "2.500 – 5.000 €",
      "Über 5.000 €"
    ]
  },

  footer: {
    copy: "© 2025 Dennis Mehlich · Webdesign · HTML & KI · Chemnitz",
    links: [
      { label: "Impressum",   href: "#" },
      { label: "Datenschutz", href: "#" }
    ]
  },

  hubspot: {
    portalId: "148633342",
    formId: "259a0f8b-cba4-4b2a-ae50-fe99b5534861",
    region: "eu1"
  },

  n8n: {
    webhookUrl: "https://dennismehlich.app.n8n.cloud/webhook/e2793739-a4ed-4327-80f5-e27cd5fa7588/chat",
    welcomeMessages: [
      "Hallo! 👋 Ich bin Dennis's KI-Assistent.",
      "Ich beantworte Ihre Fragen rund um Webdesign, KI-Websites und digitale Kundenverwaltung. Wie kann ich helfen?"
    ]
  }

};