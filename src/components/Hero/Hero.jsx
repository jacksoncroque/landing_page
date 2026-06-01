import { ArrowRight, Shield, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
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
    </div>
  );
};

export default Hero;
