import { Check, Clock1 } from "lucide-react";

const Prices = () => {
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      <section id="pricing" className="mx-auto max-w-6xl px-4 pt-8 pb-20">
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
    </div>
  );
};

export default Prices;
