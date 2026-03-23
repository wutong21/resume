import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const textToType = '专注前端工程化 · AI 辅助编码 · 数据可视化';
  const typingSpeed = 150;
  const delayAfterComplete = 2000;

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndex(0);
      }, delayAfterComplete);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight">
            <span className="text-primary">Frontend Engineer</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-mono min-h-[2em]">
            <span className="text-primary">{typedText}</span>
            <span className="animate-pulse text-primary">|</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            构建高性能、可维护的前端应用，专注于工程化实践和技术创新
          </p>
          
          <div className="flex justify-center space-x-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('work-experience')}
              className="font-mono"
            >
              查看工作经历
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="font-mono"
            >
              查看项目经历
            </Button>
          </div>

          <div className="flex justify-center pt-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('vibe-coding')}
              className="font-mono text-primary hover:text-primary"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              探索 Vibe Coding
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('work-experience')}
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;