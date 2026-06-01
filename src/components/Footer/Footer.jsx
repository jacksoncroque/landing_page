const Footer = () => {
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
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
};

export default Footer;
