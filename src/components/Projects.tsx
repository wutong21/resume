import { FolderKanban, Lightbulb, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface Achievement {
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

interface Project {
  id: string;
  name: string;
  company: string;
  period: string;
  background: string;
  techStack: string[];
  achievements: Achievement[];
  businessValue?: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: '技术项目',
    company: '杭州海康威视数字技术股份有限公司 | 主导搭建',
    period: '2021年03月 - 至今',
    background: '为提升部门前端开发效率和技术创新能力，从 0 到 1 主导设计并实现前端工程化平台，涵盖 AI 辅助编码、自研构建工具、大屏适配方案等核心产出，已成为部门标准化开发方案。',
    techStack: ['Node.js', 'Webpack', 'PostCSS', 'Vue 3', 'MCP Server'],
    achievements: [
      {
        title: 'AI 辅助编码 - 驱动配置型页面提效 60%+',
        situation: '配置型页面开发效率瓶颈，手动开发耗时长',
        task: '设计并实现 AI 辅助编码解决方案，提升开发效率',
        action: '基于 @modelcontextprotocol/sdk 与 FastMCP 搭建本地 MCP Server，通过 Zod 进行严格的 Schema 定义；通过 Prompt Engineering 注入代码风格约束，结合 VSCode Cline 插件实现"自然语言描述 → 自动生成符合规范代码"的闭环工作流',
        result: '编写完整使用文档并开展 20+ 次内部培训，成为部门级 AI 实践标杆，支撑配置型页面开发效率提升 60% 以上',
      },
      {
        title: '脚手架工具开发 - 出包数量增长150%+',
        situation: '项目启动流程不标准，初始化耗时长',
        task: '开发交互式脚手架工具，标准化项目启动流程',
        action: '使用 Node.js + Commander + Inquirer 实现交互式命令行工具；通过 node-svn-ultimate 从远程 SVN 拉取标准化项目模板，支持灵活组合不同功能插件',
        result: '累计支持 100+ 项目初始化，单项目平均初始化时间从 2 小时降至 30 分钟，提效 75%，定制出包数量从31个提升至78个',
      },
      {
        title: '业务组件库建设 - 模块开发效率提升 85%',
        situation: '代码复用性低，重复开发工作量大',
        task: '建设可复用的业务组件库，提高开发效率',
        action: '基于公司 HUI 组件库进行二次封装，提取通用业务逻辑；实现中等复杂度业务模块可通过 JSON 配置完成页面开发',
        result: '组件库覆盖 5 条业务线，支撑 90% 业务场景开发，代码复用率达 70%+，开发时长从 1 天降至 1 小时',
      },
      {
        title: 'Webpack 代理热切换插件',
        situation: '频繁切换代理需重启项目，耗时 58s',
        task: '实现代理配置热重载，消除重启等待',
        action: '利用 Webpack Plugin API 拦截 devServer 的 middleware 配置，结合 Chokidar 监听配置文件变化，在不销毁 Socket 连接的情况下动态更新代理规则',
        result: '配置生效时间缩短至毫秒级，显著改善了 100+ 研发人员的开发体验',
      },
      {
        title: '数据可视化大屏适配方案',
        situation: '传统 scale 方案导致热区偏移和字体模糊',
        task: '解决复杂交互适配痛点',
        action: '基于 postcss-px-to-viewport 库封装大屏适配组件，通过 CSS AST 解析在构建阶段自动将 px 转换为 vw/vh；实现媒体查询、内联样式及特定选择器的识别与转换',
        result: '完美解决热区点击位置偏移问题，大屏交互准确率达 100%，已在 30+ 大型数据可视化项目中成功落地',
      },
    ],
    businessValue: '主导建立的工程化体系支撑了 100+ 项目开发，累计节省 1000+ 人时，缩短项目交付周期 20%+。自研 3 个核心构建工具，沉淀文档 20+ 篇，连续两年获得职级晋升。',
  },
  {
    id: '2',
    name: '网络安全管理平台',
    company: '杭州***数字技术股份有限公司',
    period: '2021年03月 - 至今',
    background: '面向政企客户的网络安全综合管理平台，涵盖威胁检测、设备准入、攻击溯源等核心安全能力，支撑百万级设备接入与实时监控。',
    techStack: ['Vue 3', 'TypeScript', 'React', 'Virtual List', 'ECharts'],
    achievements: [
      {
        title: '安全管理平台核心系统',
        situation: '企业级安全管理平台需要支持百级配置项的动态表单渲染',
        task: '构建核心架构，实现复杂业务逻辑与性能优化',
        action: '基于 Vue/React 构建企业级安全管理平台，设计动态表单渲染方案；针对海量窗口开放场景，应用虚拟列表处理数据解析；深度参与威胁检测、设备准入、攻击溯源等核心模块',
        result: '万级数据渲染卡顿降低 80%，确保浏览器主线程响应流畅，实现业务逻辑解耦，提升代码复用率',
      },
      {
        title: 'ToC 高并发活动页',
        situation: '活动页需要支撑高并发访问，性能要求高',
        task: '保障性能与稳定性',
        action: '通过 LCP 专项优化（图片 WebP 压缩、关键 CSS 内联），优化首屏加载性能',
        result: '首屏加载时间控制在 1.2s 内，网络安全宣传活动页累计 50 万+ 访问量、5000+ 参与用户',
      },
      {
        title: '数据可视化大屏',
        situation: '需要多维度数据展示与交互分析',
        task: '实现复杂交互与业务应用',
        action: '实现多维度数据钻取与联动分析，封装 10+ 类通用可视化组件，支持安全评分、风险趋势等核心指标的动态展示',
        result: '方案在团队内 30+ 项目中落地，累计为部门节省 300+ 人时开发成本',
      },
    ],
    businessValue: '平台支撑百万级设备接入，年处理安全事件超千万次，成为公司核心安全产品线的重要基础设施。',
  },
];

const AchievementCard = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-4 border-primary">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-start gap-3 mb-2 text-left group"
      >
        <span className="neo-number shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
          {index + 1}
        </span>
        <div className="flex-1">
          <h4 className="font-bold flex items-center gap-2 flex-wrap">
            <Lightbulb className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm md:text-base">{achievement.title}</span>
          </h4>
        </div>
        <div className="shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="ml-10 mt-4 space-y-4 animate-fade-in">
          <div className="p-4 bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center bg-secondary text-foreground text-xs font-bold">S</div>
              <span className="text-sm font-bold text-secondary-foreground">情境 Situation</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{achievement.situation}</p>
          </div>
          
          <div className="p-4 bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center bg-primary text-white text-xs font-bold">T</div>
              <span className="text-sm font-bold">任务 Task</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{achievement.task}</p>
          </div>
          
          <div className="p-4 bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center bg-accent text-foreground text-xs font-bold">A</div>
              <span className="text-sm font-bold">行动 Action</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{achievement.action}</p>
          </div>
          
          <div className="p-4 bg-primary/10 border-l-4 border-primary">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center bg-primary text-white text-xs font-bold">R</div>
              <span className="text-sm font-bold text-primary">结果 Result</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{achievement.result}</p>
          </div>
        </div>
      )}
      
      {!isExpanded && (
        <p className="ml-10 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {achievement.result}
        </p>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight section-title">
            项目经历
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            从工程化平台到业务系统，全方位展示技术实力与业务价值
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" style={{ height: 'calc(100% - 60px)' }}></div>
            
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative pl-16 md:pl-24 pb-12 last:pb-0"
              >
                <div className="absolute left-0 md:left-4 flex flex-col items-center">
                  <div 
                    className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-2xl md:text-3xl font-bold bg-secondary text-foreground"
                    style={{ 
                      border: '3px solid var(--color-border)',
                      boxShadow: '4px 4px 0px var(--color-border)'
                    }}
                  >
                    <FolderKanban className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  
                  <div className="mt-2 px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase tracking-wider"
                    style={{ border: '2px solid var(--color-border)' }}
                  >
                    #{index + 1}
                  </div>
                </div>

                <div className="neo-card overflow-hidden">
                  <div className="bg-secondary p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-background shrink-0">
                          <FolderKanban className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                          <p className="text-muted-foreground font-medium text-sm md:text-base">{project.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium shrink-0 bg-background px-3 py-1"
                        style={{ border: '2px solid var(--color-border)' }}
                      >
                        {project.period}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.background}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={techIndex % 3 === 0 ? 'neo-tag' : techIndex % 3 === 1 ? 'neo-tag neo-tag-pink' : 'neo-tag neo-tag-blue'}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-6">
                      {project.achievements.map((achievement, achieveIndex) => (
                        <AchievementCard 
                          key={achieveIndex} 
                          achievement={achievement} 
                          index={achieveIndex}
                        />
                      ))}
                    </div>

                    {project.businessValue && (
                      <div className="mt-8 p-4 md:p-5 bg-secondary/30 border-l-4 border-secondary">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="h-4 w-4 text-primary" />
                          <span className="font-bold">业务价值</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.businessValue}
                        </p>
                      </div>
                    )}
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
