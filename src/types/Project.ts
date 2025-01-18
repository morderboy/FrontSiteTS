// src/types/Project.ts
export interface BaseProject {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}
export interface Project extends BaseProject {
    id: string;
}