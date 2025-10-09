import { FC } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { unevaluatedProjects } from '@/lib/data';

const TopPage: FC = () => {
    const evaluationCount = 5;
    const progress = 16;
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center text-accent-yellow">トップページ</h1>
            <div className="bg-card-dark rounded-lg shadow-md p-6 mb-6 text-center">
                <h2 className="text-xl font-semibold mb-2 text-accent-yellow">あなたのステータス</h2>
                <div className="plant-status my-4">
                    <img alt="植木鉢" className="opacity-100 z-0 h-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3iM000qXpmPN5zJifsiscV4DwdmGtpIFfBXJHQZurTWnqvyzbEHl1I5LVR-q3TCxzZUfK9mPi2MQeeilPNCifc4L-Ab2XtzmExPiDuk08iptIdCXG-wJHSKRwMR2bsDXXhQkpVY8Y4BLoStHpnHaxonKrWUuaGuW06X9LSjovjSmaklKUNDAyxJ6m4gAFEHuwr3B-SEJIoAJw1s6bS2TO_nvsub2uwDGaZqVcJOzDFEB551by_uH4lolqiK4fssnN9ipNpGa56DQ" />
                    <img alt="芽が出たばかりの植物" className="opacity-100 z-10 h-28" id="plant-sprout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB27Ows3OUoyVg25aJg9ITiIp9voJcAy1Om_36AWCat1YQzKBP40aZ4WeL3_t_D0-teAFqNtApIlmpfRYdnDW7OjTunCiJTBzO04zF3yaxzvbZ2nbcU0TzJ64bVDytkDBBKmB50akq9gZbuhe-w1ew7AGD2E-oUfJG8KEM5nMI1Zu3DYys1DIfsz1yx30pFANh5Acdh9gaKMPtF27ZvnNVgrzk1Aj1HMWKQBKXEm-I7cfhWPy_twKsI5AHLjlsNscA9RmamdjYoKGU" />
                </div>
                <p className="text-secondary-text-dark">評価した企画数: <span>{evaluationCount}</span></p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-4 text-accent-yellow">未評価の企画</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {unevaluatedProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    );
};

export default TopPage;

