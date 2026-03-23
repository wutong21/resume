import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, TrendingUp } from 'lucide-react';
import type { WorkExperience as WorkExperienceType } from '@/types';

const workExperiences: WorkExperienceType[] = [
  {
    id: '1',
    company: '杭州***数字技术股份有限公司',
    position: '前端开发工程师',
    period: '2021年03月 - 至今',
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
    points: [
      '参与金融产品前端开发，配合产品与后端团队完成业务需求交付',
      '负责数据可视化页面与表单系统开发，完成前后端接口对接与数据处理',
      '参与项目需求分析与技术方案设计，积累金融业务开发经验',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold tracking-tight mb-4">
            工作经历
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            持续成长，不断突破，在前端工程化领域深耕细作
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workExperiences.map((experience, index) => (
            <Card
              key={experience.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">
                        {experience.company}
                      </CardTitle>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="font-mono">
                        {experience.position}
                      </Badge>
                      {index === 0 && (
                        <Badge className="font-mono">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          在职
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground text-sm font-mono">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;