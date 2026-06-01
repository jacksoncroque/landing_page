import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
  Clock1,
} from "lucide-react";

import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testmonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* navbar */}
      <header className="sticky top-0 z-40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            {" "}
            <Sparkles className="size-5 text-fuchsia-400" />{" "}
            <span className="font-bold tracking-tight">Minha marca</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-small">
            {navLinks.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-fuchsia-300 transition"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
              <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-5 text-fuchsia-400" />
                    <span className="font-semibold">Minha marca</span>
                  </div>
                  <button
                    className="p-2 rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 .bg-slate-900 p-4 w-90">
                  {navLinks.map((link) => {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-slate-200"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2"></div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold"
          >
            Acelere sua presença online com uma landing{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-400 to-violet-300">
              simples e eficaz!
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-4 text-slate-400 max-w-2xl"
          >
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ea rem illum consequatur vel maxime explicabo quasi
              asperiores ullam!
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center 
              gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium 
              hover:bg-fuchsia-700 transition"
            >
              Comece Agora <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center 
              gap-2 rounded-2xl px-6 py-3 font-medium border 
              border-white/10 hover:bg-white/5 transition"
            >
              Ver recursos
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4" 
          >
            {["Velocidade", "Segurança", "Conversão"].map((label, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/2 p-6"
              >
                <div className="flex items-center gap-3 ">
                  {i == 0 && <Zap className="size-5 text-emerald-400" />}
                  {i == 1 && <Shield className="size-5 text-sky-400" />}
                  {i == 2 && <Star className="size-5 text-amber-400" />}
                  <div className="font-semibold">{label}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Tudo o que você precisa</h2>
        <p className="text-slate-300 mt-2 mw-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
          minima eveniet earum doloribus?
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              id: 1,
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Zap className="size-5 text-emerald-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Shield className="size-5 text-sky-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Zap className="size-5 text-emerald-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Shield className="size-5 text-sky-400" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/2 p-6"
            >
              <div className="flex items-center gap-3">
                {feature.icon}
                <p className="font-semibold">{feature.title}</p>
              </div>
              <p className="text-sm text-slate-400 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Quem usou, aprovou </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <blockquote
              key={i}
              className="rounded 2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quia facere harum?
              </p>
              <footer className="mt-3 text-sm text-slate-400">
                {" "}
                -Nome do cliente
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Preços */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">Plano único sem complicação</h2>
            <p className="text-slate-300 mt-6 mw-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              minima eveniet earum doloribus?
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Benefício 1
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Benefício 2
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Benefício 3
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10  bg-white/2 p-6">
            <div className="text-sm text-slate-400">A partir de</div>
            <div className="text-5xl font-extrabold mt-2">R$199,99</div>
            <div className="text-sm text-slate-300 mt-4 flex gap-2 items-center">
              <Clock1 className="size-6 text-amber-400" />
              <p>Somente hoje!</p>
            </div>
            <button
              href="#"
              className="mt-6 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium cursor-pointer hover:bg-fuchsia-400"
            >
              Comprar agora!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center">
          <div className="mb-4">
            Minha marca &copy;{new Date().getFullYear()}
          </div>
          <a href="#" className="text-slate-300">
            Política de Privacidade
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
