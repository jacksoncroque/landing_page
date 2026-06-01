import { Star } from "lucide-react";

const Depoiments = () => {
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      <section id="testmonials" className="mx-auto max-w-6xl px-4 py-8">
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
    </div>
  );
};

export default Depoiments;
