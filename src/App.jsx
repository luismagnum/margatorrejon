import './App.css'

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiHeart,
  FiSun,
  FiUsers,
  FiActivity,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./index.css";

function App() {
  const [menuAbierto, setMenuAbierto] = React.useState(false);

  // IMPORTANTE: colocá acá el número real de Marga.
  // Usá código de país, sin +, espacios ni guiones.
  // Ejemplo de formato argentino: "54911XXXXXXXX"
  const WHATSAPP_NUMBER = "5492984666004";

  const mensaje =
    "Hola, Marga. Vi tu página y quisiera recibir más información sobre el acompañamiento y la disponibilidad.";

  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    mensaje
  )}`;

  const areas = [
    {
      icono: FiHeart,
      titulo: "Salud mental y acompañamiento",
      texto:
        "Un espacio de escucha y apoyo para atravesar desafíos cotidianos, fortalecer recursos personales y acompañar cada proceso.",
    },
    {
      icono: FiSun,
      titulo: "Desarrollo y atención temprana",
      texto:
        "Acompañamiento en las primeras etapas de la vida, atendiendo las necesidades de cada niño y trabajando junto a su familia.",
    },
    {
      icono: FiActivity,
      titulo: "Integración sensorial",
      texto:
        "Propuestas orientadas a favorecer la participación en actividades diarias cuando procesar estímulos del entorno resulta difícil.",
    },
    {
      icono: FiUsers,
      titulo: "Rehabilitación cognitiva",
      texto:
        "Trabajo sobre habilidades como la atención, la memoria y la organización, según los objetivos y necesidades de cada persona.",
    },
  ];

  const preguntas = [
    {
      pregunta: "¿A quiénes está dirigido el acompañamiento?",
      respuesta:
        "A niños, adolescentes, adultos y familias. Cada consulta se conversa de forma individual para conocer la situación y orientar los próximos pasos.",
    },
    {
      pregunta: "¿Necesito saber qué tipo de atención necesito antes de escribir?",
      respuesta:
        "No. Podés contar brevemente qué te preocupa o qué información estás buscando. Marga podrá orientarte sobre su forma de trabajo.",
    },
    {
      pregunta: "¿Cómo consulto por disponibilidad?",
      respuesta:
        "Presioná el botón de WhatsApp y enviá tu consulta. Allí podrás pedir información sobre modalidad, horarios y disponibilidad.",
    },
  ];

  const BotonWhatsApp = ({ children, className = "" }) => (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 font-bold transition hover:-translate-y-0.5 ${className}`}
    >
      <FaWhatsapp className="text-xl" />
      {children}
      <FiArrowUpRight className="text-lg" />
    </a>
  );

  return (
    <div className="min-h-screen overflow-hidden">
      {/* ENCABEZADO */}
      <header className="bg-cream">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
    <a
      href="#inicio"
      className="font-display text-lg font-extrabold tracking-tight text-ink"
    >
      Marga <span className="text-teal">Torrejón</span>
      <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-widest text-teal">
        Lic. en A.T.
      </span>
    </a>

    <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
      <a href="#sobre-mi" className="hover:text-teal">Sobre mí</a>
      <a href="#areas" className="hover:text-teal">Áreas de trabajo</a>
      <a href="#preguntas" className="hover:text-teal">Preguntas frecuentes</a>
      <a
        href="#contacto"
        className="rounded-full bg-ink px-5 py-3 font-bold text-ink  hover:bg-teal"
      >
        Consultar por WhatsApp
      </a>
    </nav>
  </div>
</header>
      <main>
        {/* SECCIÓN PRINCIPAL */}
        <section
          id="inicio"
          className="relative bg-cream px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white px-4 py-2 text-sm font-bold text-teal">
                <span className="h-2 w-2 rounded-full bg-teal" />
                Acompañamiento para cada etapa de la vida
              </div>

              <h1 className="max-w-3xl font-display text-[clamp(2.8rem,5.3vw,5.4rem)] font-extrabold leading-[1.08] tracking-[-.055em] text-deep">
                Cada persona tiene su{" "}
                <span className="text-teal">propio camino.</span> No tenés que
                recorrerlo sola.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
                Acompaño a niños, adolescentes, adultos y familias desde una
                mirada cercana e individual, en salud mental, desarrollo y
                habilidades para la vida cotidiana.
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <BotonWhatsApp className="bg-ink text-ink shadow-lg shadow-ink/15 hover:bg-teal">
                  Quiero más información
                </BotonWhatsApp>

                <a
                  href="#areas"
                  className="px-2 py-3 font-bold text-teal underline decoration-teal/40 underline-offset-8"
                >
                  Conocé cómo puedo ayudarte
                </a>
              </div>

              <p className="mt-6 text-sm text-ink/60">
                Contame qué necesitás y conversemos sobre los próximos pasos.
              </p>
            </div>

            <div className="relative min-h-110 overflow-hidden rounded-[2.2rem] bg-ink p-8 text-ink shadow-2xl shadow-ink/15 sm:p-11 lg:min-h-137.5">
              <div className="grain absolute inset-0 opacity-70" />
              <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#78bba9] opacity-50 blur-3xl" />
              <div className="absolute -bottom-36 -left-20 h-96 w-96 rounded-full bg-[#3e8f91] opacity-50 blur-3xl" />

              <div className="relative flex h-full min-h-92.5 flex-col justify-between lg:min-h-115">
                <span className="w-fit rounded-full border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[.2em]">
                  Un espacio para avanzar
                </span>

                <div className="hero-card relative flex items-center justify-center py-8">
                  <div className="flex h-60 w-60 items-center justify-center rounded-full border border-white/20 sm:h-72 sm:w-72">
                    <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur sm:h-56 sm:w-56">
                      <FiHeart
                        className="text-[7rem] text-peach sm:text-[9rem]"
                        strokeWidth={0.8}
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-0 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-sm font-semibold leading-snug backdrop-blur">
                    Escucha · confianza
                    <br />
                    acompañamiento
                  </div>
                </div>

                <p className="max-w-xs font-display text-xl font-bold leading-snug">
                  Una mirada que reconoce tu historia, tus fortalezas y tus
                  tiempos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE MARGA */}
        <section
          id="sobre-mi"
          className="bg-white px-6 py-20 lg:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[.18em] text-teal">
                Sobre mí
              </span>

              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Hola, soy
                <br />
                Marga Torrejón.
              </h2>

              <div className="mt-7 h-1 w-20 rounded-full bg-peach" />
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                Soy Lic. en A.T. y trabajo con personas y familias que buscan
                acompañamiento en salud mental, desarrollo, atención temprana y
                procesos cognitivos.
              </p>

              <p>
                Mi propuesta parte de conocer a cada persona y su contexto. A
                partir de esa conversación, podemos pensar objetivos y formas
                de acompañamiento acordes a sus necesidades.
              </p>

              <p className="font-semibold text-ink">
                Si tenés dudas sobre cómo empezar, escribime. Una primera
                consulta puede ayudarte a encontrar orientación.
              </p>
            </div>
          </div>
        </section>

        {/* ÁREAS DE TRABAJO */}
        <section
          id="areas"
          className="bg-[#edf5f1] px-6 py-20 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="text-sm font-extrabold uppercase tracking-[.18em] text-teal">
                Áreas de trabajo
              </span>

              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                ¿En qué puedo acompañarte?
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                El acompañamiento se adapta a la etapa de vida, las necesidades
                y los objetivos de cada persona.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {areas.map(({ icono: Icono, titulo, texto }, indice) => (
                <article
                  key={titulo}
                  className="soft-shadow rounded-[1.6rem] border border-ink/5 bg-white p-8 sm:p-10"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-2xl text-deep">
                    <Icono />
                  </div>

                  <div className="mb-3 text-xs font-bold tracking-[.18em] text-teal">
                    0{indice + 1} / 04
                  </div>

                  <h3 className="font-display text-2xl font-extrabold tracking-tight">
                    {titulo}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-ink/70">
                    {texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CUÁNDO CONSULTAR */}
        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="rounded-4xl bg-peach/50 p-9 sm:p-12">
              <div className="flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-teal">
                  <FiUsers />
                </span>

                <span className="text-sm font-extrabold uppercase tracking-[.16em] text-teal">
                  Para vos y tu familia
                </span>
              </div>

              <p className="mt-16 max-w-md font-display text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
                Pedir orientación también es una forma de cuidar.
              </p>

              <div className="mt-12 h-1 w-24 rounded-full bg-teal" />
            </div>

            <div>
              <span className="text-sm font-extrabold uppercase tracking-[.18em] text-teal">
                ¿Cuándo consultar?
              </span>

              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Tal vez este sea un buen momento para conversar.
              </h2>

              <ul className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
                <li className="border-l-4 border-mint pl-5">
                  Si te preocupa el desarrollo o las experiencias sensoriales
                  de tu hijo o hija.
                </li>

                <li className="border-l-4 border-mint pl-5">
                  Si vos o alguien de tu familia necesita apoyo para afrontar
                  desafíos cotidianos.
                </li>

                <li className="border-l-4 border-mint pl-5">
                  Si buscás acompañar habilidades de atención, memoria u
                  organización.
                </li>
              </ul>

              <p className="mt-7 font-semibold text-ink">
                No necesitás tener todas las respuestas antes de consultar.
              </p>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section
          id="preguntas"
          className="bg-cream px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[.18em] text-teal">
                Preguntas frecuentes
              </span>

              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Antes de escribir
              </h2>
            </div>

            <div className="space-y-3">
              {preguntas.map(({ pregunta, respuesta }) => (
                <details
                  key={pregunta}
                  className="group rounded-2xl border border-ink/10 bg-white px-6 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold">
                    {pregunta}
                    <FiChevronDown className="shrink-0 text-teal transition group-open:rotate-180" />
                  </summary>

                  <p className="pt-4 leading-relaxed text-ink/70">
                    {respuesta}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="bg-deep px-6 py-20 text-ink lg:px-10 lg:py-24"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[.18em] text-mint">
                Contacto
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                ¿Querés conversar sobre tu situación?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Escribime por WhatsApp y contame brevemente qué necesitás.
              </p>
            </div>

            <BotonWhatsApp className="w-fit bg-white text-ink hover:bg-mint">
              Escribir por WhatsApp
            </BotonWhatsApp>
          </div>
        </section>
      </main>

      <footer className="bg-deep px-6 pb-8 text-sm text-ink lg:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-6">
          Marga Torrejón · Lic. en A.T.
        </div>
        <p className="mx-auto mt-5 max-w-7xl border-t border-white/20 pt-6 text-center text-sm text-ink">
          Desarrollado por Luis Díaz Marketing · 2026 · Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;