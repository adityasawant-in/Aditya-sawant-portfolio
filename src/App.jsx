import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedEnding from './components/AnimatedEnding';
import SectionDivider from './components/SectionDivider';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-bg-primary"
          >
            <Navbar />

            <main>
              {/* Hero */}
              <Hero />

              <SectionDivider />

              {/* About */}
              <About />

              <SectionDivider flip />

              {/* Experience & Education */}
              <Experience />

              <SectionDivider />

              {/* Skills */}
              <Skills />

              <SectionDivider flip />

              {/* Projects */}
              <Projects />

              <SectionDivider />

              {/* Contact */}
              <Contact />

              {/* Animated Ending + Footer */}
              <AnimatedEnding />
            </main>

            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
