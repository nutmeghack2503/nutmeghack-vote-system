import { FC, MouseEventHandler } from 'react';
import { Project } from '@/lib/types';

interface Props {
  project: Pick<Project, 'title' | 'image'>;
  onClick?: MouseEventHandler;
}

const ProjectCard: FC<Props> = ({ project, onClick }) => (
    <div className="bg-card-dark rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={onClick}>
        <img alt="企画のサンプル画像" className="w-full h-32 object-cover" src={project.image} />
        <div className="p-4">
            <h3 className="font-bold text-lg text-white">{project.title}</h3>
        </div>
    </div>
);

export default ProjectCard;

