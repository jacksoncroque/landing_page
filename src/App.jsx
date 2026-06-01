import Depoiments from "./components/Depoiments";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prices from "./components/Prices";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Depoiments />
      <Prices />
      <Footer />
    </>
  );
};

export default App;
