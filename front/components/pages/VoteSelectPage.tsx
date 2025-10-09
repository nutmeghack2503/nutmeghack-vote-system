import { FC } from 'react';
import { sampleProjects } from '@/lib/data';
import BackButton from '../ui/BackButton';
import MaterialIcon from '../ui/MaterialIcon';
import ProjectCard from '../ui/ProjectCard';

interface Props {
  onBack: () => void;
}

const VoteSelectPage: FC<Props> = ({ onBack }) => {
    return (
        <div className="p-4">
            <BackButton onClick={onBack} />
            <h1 className="text-2xl font-bold mb-4 text-accent-yellow">投票企画選択</h1>
            <div className="relative mb-4">
                <MaterialIcon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-text-dark" />
                <input className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-full bg-card-dark focus:outline-none focus:ring-2 focus:ring-primary text-white" placeholder="企画を検索..." type="text" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sampleProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    );
};

export default VoteSelectPage;

