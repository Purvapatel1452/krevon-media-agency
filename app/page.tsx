import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Taglines from '@/components/Taglines';
import About from '@/components/About';
import Services from '@/components/Services';
import PodcastStudio from '@/components/PodcastStudio';
import Brands from '@/components/Brands';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Taglines />
      <main>
        <About />
        <Services />
        <PodcastStudio />
        <Brands />
        <Portfolio />
        <Team />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
