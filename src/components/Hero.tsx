import { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = '构建更好的用户体验...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        index = 0;
        setTypedText('');
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 neo-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="neo-card p-8 md:p-12">
            <div className="mb-6">
              <span className="neo-tag">
                👋 HELLO WORLD
              </span>
            </div>
            
            <h1 className="neo-title mb-6">
              <span className="text-primary">FRONTEND</span>
              <br />
              <span className="neo-text-stroke">ENGINEER</span>
            </h1>
            
            <div className="text-lg md:text-xl mb-8 min-h-[2em] font-medium">
              <span className="text-secondary">{typedText}</span>
              <span className="neo-cursor"></span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('work-experience')}
                className="neo-btn px-8 py-4 text-base"
              >
                💼 工作经历
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="neo-btn neo-btn-secondary px-8 py-4 text-base"
              >
                📁 项目经历
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-8 md:gap-12 mt-12">
            <div className="text-center animate-float">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-sm font-bold">快速迭代</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-sm font-bold">高性能</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl mb-2">🎨</div>
              <div className="text-sm font-bold">精美设计</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
