import { ExternalLink, Sparkles, Users, TrendingUp, Code2 } from 'lucide-react';

interface VibeProject {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  stats?: {
    users?: string;
    trend?: string;
  };
}

const vibeProjects: VibeProject[] = [
  {
    id: '1',
    name: '职业 AI 敏感度分析器',
    description: '分析不同职业对AI的敏感度，帮助用户了解职业发展趋势和AI影响程度',
    url: 'https://wutong21.github.io/CareerAISensitivity/',
    tags: ['AI', '数据分析', '职业规划'],
    stats: {
      users: '9270.7M 从业人员',
      trend: '314 个职业数据',
    },
  },
  {
    id: '2',
    name: 'Tong - 个人简介',
    description: '前端开发工程师个人主页，展示工作经历、项目经历和Vibe Coding项目',
    url: 'https://wutong21.github.io/resume/',
    tags: ['React', 'TypeScript', 'Vite'],
    stats: {
      trend: 'GitHub Pages',
    },
  },
];

const VibeCoding = () => {
  return (
    <section id="vibe-coding" className="py-20 neo-section-muted">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary text-white">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight section-title">
              VIBE CODING
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mt-4 text-lg">
            用AI驱动的创意项目，探索技术与创新的无限可能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {vibeProjects.map((project) => (
            <div
              key={project.id}
              className="neo-card p-6 group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent shrink-0">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={index % 2 === 0 ? 'neo-tag neo-tag-pink' : 'neo-tag neo-tag-blue'}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.stats && (
                <div className="space-y-2 mb-6">
                  {project.stats.users && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">{project.stats.users}</span>
                    </div>
                  )}
                  {project.stats.trend && (
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-medium">{project.stats.trend}</span>
                    </div>
                  )}
                </div>
              )}

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-accent px-6 py-3 text-sm text-center mt-auto"
              >
                <ExternalLink className="h-4 w-4 mr-2 inline" />
                查看项目 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeCoding;
