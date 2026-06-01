import { Shield, Sparkles, Zap } from "lucide-react";

const features = [
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
];

const Features = () => {
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Tudo o que você precisa</h2>
        <p className="text-slate-300 mt-2 mw-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
          minima eveniet earum doloribus?
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
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
    </div>
  );
};

export default Features;
