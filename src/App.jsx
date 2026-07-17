import { useState } from 'react';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { BackgroundField } from './components/layout/BackgroundField';
import { CircuitSpine } from './components/layout/CircuitSpine';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Terminal } from './sections/Terminal';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { useActiveSection } from './hooks/useActiveSection';
import { useMagneticButtons } from './animations/useMagneticButtons';
import { NAV_LINKS } from './data/resumeData';

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

function App() {
  const [loading, setLoading] = useState(true);
  const activeId = useActiveSection(SECTION_IDS);
  useMagneticButtons();

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <BackgroundField />
      <CustomCursor />
      <CircuitSpine activeId={activeId} />
      <Navbar activeId={activeId} />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Terminal />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
