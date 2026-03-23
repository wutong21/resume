import { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: '首页', id: 'hero', emoji: '🏠' },
    { label: '工作', id: 'work-experience', emoji: '💼' },
    { label: '项目', id: 'projects', emoji: '📁' },
    { label: 'Vibe', id: 'vibe-coding', emoji: '✨' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background border-b-2 border-foreground'
          : 'bg-transparent'
      }`}
      style={{ borderWidth: scrolled ? '0 0 2px 0' : '0' }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group animate-shake" 
          onClick={() => scrollToSection('hero')}
        >
          <div className="neo-badge">
            <span className="text-lg">⚡</span>
            <span className="font-bold">TONG</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 bg-background hover:bg-secondary hover:-translate-y-0.5 transition-all font-bold text-sm"
            >
              {item.emoji} {item.label}
            </button>
          ))}

          <div className="w-2 h-5 bg-foreground mx-2"></div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 bg-secondary hover:bg-primary hover:text-white transition-all"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-secondary"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-primary text-white"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t-2 border-foreground" style={{ borderWidth: '2px 0 0 0' }}>
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 bg-background hover:bg-secondary transition-all font-bold"
              >
                {item.emoji} {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
