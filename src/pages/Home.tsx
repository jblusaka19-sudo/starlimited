import Hero from '../components/Hero';
import About from '../components/About';
import CoreValues from '../components/CoreValues';
import HumanResource from '../components/HumanResource';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <CoreValues />
      <HumanResource />
      <Services />
      <Contact />
    </div>
  );
}
