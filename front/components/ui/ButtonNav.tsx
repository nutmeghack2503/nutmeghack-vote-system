import { FC } from 'react';
import { Page } from '@/lib/types';
import MaterialIcon from './MaterialIcon';

interface Props {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const BottomNav: FC<Props> = ({ activePage, onNavigate }) => {
    const navItems: { id: Page, icon: string, label: string }[] = [
        { id: 'top', icon: 'home', label: 'トップ' },
        { id: 'evaluation', icon: 'rate_review', label: '評価' },
        { id: 'ranking', icon: 'leaderboard', label: 'ランキング' },
        { id: 'vote', icon: 'how_to_vote', label: '投票' },
    ];
    const mainPages: Page[] = ['top', 'evaluation', 'ranking', 'vote'];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow-[0_-2px_5px_rgba(0,0,0,0.3)]">
            <div className="flex justify-around">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`p-3 flex-1 flex flex-col items-center justify-center transition-colors ${mainPages.includes(activePage) && activePage === item.id ? 'text-primary' : 'text-secondary-text-dark'}`}
                    >
                        <MaterialIcon name={item.icon} />
                        <span className="text-xs font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;

