import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const Home = () => {
  return (
    <div className="flex bg-teal-500 flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto bg-slate-800 grid p-4 gap-4 sm:grid-cols-2">
        <img src="https://picsum.photos/id/1060/536/354" alt="coffee barista" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
