"use client";
import { FC, useState } from 'react';
import { sampleProjects } from '@/lib/data';
import MaterialIcon from '../ui/MaterialIcon';

const RankingPage: FC = () => {
    const [filter, setFilter] = useState('food');
    const filters = [
        { key: 'food', label: '食販' },
        { key: 'goods', label: '物販' },
        { key: 'company', label: '企業' },
        { key: 'event', label: 'イベント' },
    ];
    const sortedProjects = [...sampleProjects].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-accent-yellow">ランキング</h1>
            <div className="flex space-x-1 bg-gray-700 rounded-full p-1 mb-4">
                {filters.map(f => (
                    <button
                        key={f.key}
                        onClick={() => setFilter(f.key)}
                        className={`w-full text-center px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === f.key ? 'bg-primary text-background-dark' : 'text-secondary-text-dark'}`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>
            <div className="space-y-4">
                {sortedProjects.map((p, index) => (
                    <div key={p.id} className="bg-card-dark rounded-lg shadow-md p-4 flex items-center space-x-4">
                        <span className="text-2xl font-bold w-8 text-center text-accent-yellow">{index + 1}</span>
                        <img alt="企画のサンプル画像" className="w-20 h-20 object-cover rounded-lg" src={p.image} />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg text-white">{p.title}</h3>
                            <div className="flex items-center text-sm text-secondary-text-dark">
                                <MaterialIcon name="star" className="text-yellow-400 text-base" />
                                <span className="ml-1 font-semibold text-white">{p.rating}</span>
                                <span className="ml-2">(評価数: {p.evaluations})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RankingPage;

