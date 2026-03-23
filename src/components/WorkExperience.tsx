import { Building2, TrendingUp, Trophy, Star, Zap } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  points: string[];
  level: number;
  status: 'current' | 'completed';
}

const experiences: Experience[] = [
  {
    id: '1',
    company: '杭州***数字技术股份有限公司',
    position: '前端开发工程师',
    period: '2021年03月 - 至今',
    level: 2,
    status: 'current',
    points: [
      '连续两年职级晋升（2022、2023），获得公司认可，展现快速成长能力',
      '内部线下培训 20+ 次，平均 10 人/场，累计培训超 200 人次',
      '沉淀经验案例 20+ 篇，建立技术文档库，助力团队成长',
    ],
  },
  {
    id: '2',
    company: '浙江***软件有限公司',
    position: '前端开发工程师',
    period: '2019年03月 - 2021年03月',
    level: 1,
    status: 'completed',
    points: [
      '参与金融产品前端开发，配合产品与后端团队完成业务需求交付',
      '负责数据可视化页面与表单系统开发，完成前后端接口对接与数据处理',
      '参与项目需求分析与技术方案设计，积累金融业务开发经验',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 neo-section-muted">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight section-title">
              职业历程
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            解锁新技能，升级打怪，持续成长
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" style={{ height: 'calc(100% - 60px)' }}></div>
            
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="relative pl-16 md:pl-24 pb-12 last:pb-0"
              >
                <div className="absolute left-0 md:left-4 flex flex-col items-center">
                  <div 
                    className={`relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-2xl md:text-3xl font-bold
                      ${experience.status === 'current' 
                        ? 'bg-primary text-white animate-pulse-glow' 
                        : 'bg-secondary text-foreground'
                      }`}
                    style={{ 
                      border: '3px solid var(--color-border)',
                      boxShadow: experience.status === 'current' 
                        ? '0 0 20px rgba(255, 0, 110, 0.5)' 
                        : '4px 4px 0px var(--color-border)'
                    }}
                  >
                    {experience.status === 'current' ? (
                      <Zap className="h-6 w-6 md:h-8 md:w-8" />
                    ) : (
                      <Star className="h-6 w-6 md:h-8 md:w-8" />
                    )}
                  </div>
                  
                  <div className="mt-2 px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase tracking-wider"
                    style={{ border: '2px solid var(--color-border)' }}
                  >
                    LV.{experience.level}
                  </div>
                </div>

                <div className="neo-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{experience.company}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="neo-tag">{experience.position}</span>
                        {experience.status === 'current' && (
                          <span className="neo-tag neo-tag-pink">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            当前关卡
                          </span>
                        )}
                        {experience.status === 'completed' && (
                          <span className="neo-tag neo-tag-blue">
                            <Trophy className="h-3 w-3 mr-1" />
                            已通关
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium shrink-0 bg-background px-3 py-1"
                      style={{ border: '2px solid var(--color-border)' }}
                    >
                      {experience.period}
                    </span>
                  </div>

                  <div className="space-y-1 mb-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                      <span>任务进度</span>
                      <span className="text-primary">{experience.points.length}/{experience.points.length}</span>
                    </div>
                    <div className="h-3 bg-muted overflow-hidden"
                      style={{ border: '2px solid var(--color-border)' }}
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {experience.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-accent text-foreground font-bold text-sm shrink-0"
                          style={{ border: '2px solid var(--color-border)' }}
                        >
                          ✓
                        </div>
                        <p className="text-sm leading-relaxed pt-1">{point}</p>
                      </div>
                    ))}
                  </div>

                  {experience.status === 'current' && (
                    <div className="mt-6 p-4 bg-primary/10 border-l-4 border-primary">
                      <div className="flex items-center gap-2 text-sm font-bold text-primary">
                        <Zap className="h-4 w-4" />
                        <span>正在探索新技能...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary"
              style={{ border: '3px solid var(--color-border)', boxShadow: '4px 4px 0px var(--color-border)' }}
            >
              <Trophy className="h-6 w-6" />
              <span className="font-bold text-lg">TO BE CONTINUED...</span>
              <Star className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
