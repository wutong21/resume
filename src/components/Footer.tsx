import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Code2 className="h-4 w-4 text-primary" />
          <span className="font-mono font-bold text-primary">Tong</span>
        </div>
        <p className="text-muted-foreground font-mono text-sm">
          © 2026 · 前端开发工程师个人主页
        </p>
      </div>
    </footer>
  );
};

export default Footer;