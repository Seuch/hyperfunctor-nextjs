import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const About = () => {
  return (
    <div className="flex bg-teal-500 flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full bg-slate-800 grid p-4 gap-4 sm:grid-cols-2">
        About me
      </main>
      <Footer />
    </div>
  );
};

export default About;
