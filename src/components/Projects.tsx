import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FolderKanban, Calendar, Zap, Target } from 'lucide-react';
import type { Project as ProjectType } from '@/types';

const projects: ProjectType[] = [
  {
    id: '1',
    name: '前端工程化平台',
    company: '杭州***数字技术股份有限公司',
    period: '2021年03月 - 至今',
    background: '为提升部门前端开发效率和技术创新能力，从 0 到 1 主导设计并实现前端工程化平台，涵盖 AI 辅助编码、自研构建工具、大屏适配方案等核心产出，已成为部门标准化开发方案。',
    techStack: ['Node.js', 'Webpack', 'PostCSS', 'Vue 3', 'MCP Server'],
    achievements: [
      {
        title: 'AI 辅助编码 - 驱动配置型页面开发效率提升 60%+',
        description: '基于 @modelcontextprotocol/sdk 与 FastMCP 搭建本地 MCP Server，通过 Zod 进行严格的 Schema 定义，构建 AI 辅助编码基础设施。针对 LLM 生成代码不符合团队规范的问题，通过 Prompt Engineering 注入代码风格约束，结合 VSCode Cline 插件实现「自然语言描述 → 自动生成符合规范代码」的闭环工作流。业务价值：编写完整使用文档并开展 20+ 次内部培训，成为部门级 AI 实践标杆，支撑配置型页面开发效率提升 60% 以上。',
      },
      {
        title: '脚手架工具开发 - 定制出包数量从 31 个提升至 78 个，增长 150%+',
        description: '使用 Node.js + Commander + Inquirer 实现交互式命令行工具，支持项目快速初始化。通过 node-svn-ultimate 从远程 SVN 拉取标准化项目模板（含路由、菜单、主题），使用 fs-extra 写入本地；支持通过交互选择注入团队自研 Webpack Plugin，灵活组合不同功能插件。业务价值：该脚手架已成为部门标准方案，累计支持 100+ 项目初始化，单项目平均初始化时间从 2 小时降至 30 分钟，提效 75%。',
      },
      {
        title: '业务组件库建设 - 模块开发效率提升 85%',
        description: '基于公司 HUI 组件库和业务场景进行二次封装，提取通用业务逻辑，构建可复用组件库。实现中等复杂度业务模块可通过 JSON 配置完成页面开发，开发时长从 1 天降至 1 小时，效率提升 85%。业务价值：组件库覆盖 5 条业务线，支持 90% 业务场景开发，代码复用率达 70%+。',
      },
      {
        title: 'Webpack 代理热切换插件 - 消除分钟级重启等待成本',
        description: '针对频繁切换代理需要重启项目（耗时 58s）的痛点，自研 Webpack 插件实现代理配置热重载。利用 Webpack Plugin API 拦截 devServer 的 middleware 配置，结合 Chokidar 监听配置文件变化，在不销毁 Socket 连接的情况下动态更新代理规则。优化效果：通过热重载机制消除了原有的分钟级重启等待成本，将配置生效时间缩短至毫秒级，显著改善了 100+ 研发人员的开发体验。',
      },
      {
        title: '数据可视化大屏适配方案 - 解决复杂交互适配痛点',
        description: '基于 postcss-px-to-viewport 库封装大屏适配组件，通过 CSS AST 解析在构建阶段自动将 px 转换为 vw/vh，解决传统 scale 方案导致的热区偏移和字体模糊问题。通过 AST 遍历实现对媒体查询、内联样式及特定选择器（白名单机制）的识别与转换，确保复杂场景下的渲染精度。应用成果：完美解决热区点击位置偏移问题，大屏交互准确率达 100%，已在 30+ 大型数据可视化项目中成功落地。',
      },
    ],
    businessValue: '工程化标准主导建立的工程化体系支撑了 100+ 项目开发，累计节省 1000+ 人时，缩短项目交付周期 20%+；技术影响力：自研 3 个核心构建工具，沉淀文档 20+ 篇，凭借技术创新贡献连续两年获得职级晋升。',
  },
  {
    id: '2',
    name: 'ToB 系统 + ToC 活动页 + 可视化大屏',
    company: '杭州***数字技术股份有限公司',
    period: '2021年03月 - 至今',
    background: '负责***网络安全产品线（态势感知、主机安全等）的前端架构与核心开发，涵盖复杂 ToB 管理系统、高并发 ToC 活动页及数据可视化大屏，支撑多条业务线快速迭代。',
    techStack: ['Vue 3', 'React', 'ECharts', 'WebSocket', 'Web Worker', 'Vite', 'Node.js'],
    achievements: [
      {
        title: 'ToB 网络安全管理系统（复杂业务逻辑与性能优化）',
        description: '核心架构：基于 Vue/React 构建企业级安全管理平台，设计并实现支持百级配置项的动态表单渲染方案。性能优化：针对海量窗口开放场景，应用虚拟列表（Virtual List）处理数据解析，将万级数据渲染卡顿降低 80%，确保浏览器主线程响应流畅。业务实现：深度参与威胁检测、设备准入、攻击溯源等核心模块，通过封装组件实现业务逻辑解耦，提升代码复用率。',
      },
      {
        title: 'ToC 高并发活动页（性能与稳定性保障）',
        description: '性能指标：通过 LCP 专项优化（图片 WebP 压缩、关键 CSS 内联），将首屏加载时间控制在 1.2s 内。传播效果：网络安全宣传活动页累计 50 万+ 访问量、5000+ 参与用户，成功支撑答题互动、积分统计等完整业务链路。',
      },
      {
        title: '数据可视化大屏（业务应用与交互增强）',
        description: '复杂交互：实现多维度数据钻取与联动分析，封装 10+ 类通用可视化组件，支持安全评分、风险趋势等核心指标的动态展示。业务价值：方案在团队内 30+ 项目中落地，通过标准组件库的应用，累计为部门节省 300+ 人时开发成本。',
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold tracking-tight mb-4">
            项目经历
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从工程化平台到业务系统，全方位展示技术实力与业务价值
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="bg-muted/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <FolderKanban className="h-5 w-5 text-primary" />
                      <CardTitle className="text-2xl">{project.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {project.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm font-mono">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.background}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-6">
                  {project.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary pl-4 py-2"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold">{achievement.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>

                {project.businessValue && (
                  <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="font-semibold">业务价值</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.businessValue}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;