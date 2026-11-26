import { useEffect, Component } from "react";
import "@/App.css";
import { initLenis } from "@/lib/smooth";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Programmes from "@/components/Programmes";
import FocusAreas from "@/components/FocusAreas";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-cream p-8 text-center">
          <div>
            <p className="font-display text-3xl text-forest">AROVYAM</p>
            <p className="mt-3 text-sm text-moss">
              Something went wrong. Please refresh the page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  return (
    <ErrorBoundary>
      <div className="grain relative min-h-screen bg-cream text-ink antialiased">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Approach />
          <Services />
          <Doctors />
          <Programmes />
          <FocusAreas />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
