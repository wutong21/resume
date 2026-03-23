import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Users, TrendingUp } from 'lucide-react';

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
];

const VibeCoding = () => {
  return (
    <section id="vibe-coding" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-mono font-bold tracking-tight">
              Vibe Coding
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            用AI驱动的创意项目，探索技术与创新的无限可能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vibeProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.stats && (
                  <div className="space-y-2 mb-4">
                    {project.stats.users && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{project.stats.users}</span>
                      </div>
                    )}
                    {project.stats.trend && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span>{project.stats.trend}</span>
                      </div>
                    )}
                  </div>
                )}

                <Button
                  asChild
                  className="w-full font-mono"
                  variant="outline"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    查看项目
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeCoding;