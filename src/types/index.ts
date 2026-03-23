// 工作经历类型
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  points: string[];
}

// 项目经历类型
export interface Project {
  id: string;
  name: string;
  company: string;
  period: string;
  background: string;
  techStack: string[];
  achievements: {
    title: string;
    description: string;
  }[];
  businessValue?: string;
}
