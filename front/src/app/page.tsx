"use client";
import { useState, FC } from 'react';
import { Page } from '@/lib/types';

// Page Components
import TopPage from '@/components/pages/TopPage';
import EvaluationPage from '@/components/pages/EvaluationPage';
import EvaluationPostPage from '@/components/pages/EvaluationPostPage';
import RankingPage from '@/components/pages/RankingPage';
import VotePage from '@/components/pages/VotePage';
import VoteSelectPage from '@/components/pages/VoteSelectPage';

// UI Components
import BottomNav from '@/components/ui/ButtonNav';

const App: FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('top');
    const [pageHistory, setPageHistory] = useState<Page[]>(['top']);

    const handleNavigate = (page: Page) => {
        // メインナビからの遷移は履歴をリセット
        const mainPages: Page[] = ['top', 'evaluation', 'ranking', 'vote'];
        if (mainPages.includes(page)) {
            setPageHistory([page]);
        } else {
             // 詳細ページへの遷移は履歴を追加
            setPageHistory(prev => [...prev, page]);
        }
        setCurrentPage(page);
    };
    
    const handleBack = () => {
        if (pageHistory.length > 1) {
            const newHistory = [...pageHistory];
            newHistory.pop();
            const prevPage = newHistory[newHistory.length - 1];
            setPageHistory(newHistory);
            setCurrentPage(prevPage);
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'top':
                return <TopPage />;
            case 'evaluation':
                return <EvaluationPage onNavigate={handleNavigate} />;
            case 'evaluation-post':
                return <EvaluationPostPage onBack={handleBack} />;
            case 'ranking':
                return <RankingPage />;
            case 'vote':
                return <VotePage onNavigate={handleNavigate} />;
            case 'vote-select':
                return <VoteSelectPage onBack={handleBack} />;
            default:
                return <TopPage />;
        }
    };

    return (
        <div className="pb-24 bg-background-dark text-text-dark min-h-screen">
             <style jsx global>{`
              :root {
                --primary: #FBBF24;
                --background-dark: #111827;
                --card-dark: #1F2937;
                --text-dark: #FBBF24;
                --secondary-text-dark: #9CA3AF;
                --accent-yellow: #FBBF24;
              }
              body {
                background-color: var(--background-dark);
                color: var(--text-dark);
                margin: 0;
              }
              .plant-status {
                  position: relative;
                  width: 150px;
                  height: 150px;
                  margin: 0 auto;
              }
              .plant-status img {
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  transition: opacity 0.5s ease-in-out;
              }
            `}</style>
            <main>{renderPage()}</main>
            <BottomNav activePage={currentPage} onNavigate={handleNavigate} />
        </div>
    );
};

export default App;