import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import VibeCoding from './components/VibeCoding';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <WorkExperience />
        <Projects />
        <VibeCoding />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;