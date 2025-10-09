import { FC } from 'react';
import { Page } from '@/lib/types';
import MaterialIcon from '../ui/MaterialIcon';

interface Props {
  onNavigate: (page: Page) => void;
}

const VotePage: FC<Props> = ({ onNavigate }) => {
    const ranks = [
        { rank: 1, color: 'text-yellow-400', label: '1位' },
        { rank: 2, color: 'text-gray-400', label: '2位' },
        { rank: 3, color: 'text-yellow-600', label: '3位' },
    ];
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-accent-yellow">投票</h1>
            <p className="text-secondary-text-dark mb-6 text-center">あなたが素晴らしいと思った企画を3つ選んで投票してください。</p>
            <div className="space-y-4">
                {ranks.map(r => (
                    <button key={r.rank} onClick={() => onNavigate('vote-select')} className="w-full bg-card-dark rounded-lg shadow-md p-4 text-left flex justify-between items-center">
                        <div>
                            <span className={`font-bold text-lg ${r.color}`}>{r.label}</span>
                            <span className="ml-4 text-secondary-text-dark">企画を選択</span>
                        </div>
                        <MaterialIcon name="chevron_right" className="text-secondary-text-dark" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VotePage;

