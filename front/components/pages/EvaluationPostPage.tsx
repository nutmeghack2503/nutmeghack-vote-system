"use client";
import { FC, useState } from 'react';
import BackButton from '../ui/BackButton';
import StarRating from '../ui/StarRating';

interface Props {
  onBack: () => void;
}

const EvaluationPostPage: FC<Props> = ({ onBack }) => {
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        // ここで評価を送信する処理を実装します
        alert(`評価: ${rating} を登録しました！`);
        onBack(); // 登録後に前のページに戻る
    };

    return (
        <div className="p-4">
            <BackButton onClick={onBack} />
            <h1 className="text-2xl font-bold mb-4 text-center text-accent-yellow">たこ焼き屋さん</h1>
            <img alt="企画のサンプル画像" className="w-full h-48 object-cover rounded-lg mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfIDA7LuZY2Qew5jEBkX5TZExsZbSzkxCJv9mGdh15zbR4VhTWLUhz5S6pLD0vuLZzz2mry5awpTjZijGXWupxflMjthj-hcusb6ZsZiLs2Xbc-eeio9LXv8FpbvTiHMrBgl1wkbXOLFW1IPvHdZupG8Lz2QyVRjCeIbLVqX3IAE8TtpRBbYB-1i2bWCq7pWdgawwgVbVBH61lDd03GAC5evzjODWr1_7suR5obdJw91fz4Zo4-V3Ec_Kb4TrLZQEEUoRRh_BVQkw" />
            <div className="bg-card-dark rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-center text-accent-yellow">評価をしてください</h2>
                
                <StarRating rating={rating} onRatingChange={setRating} className="mb-6" />

                <button 
                    onClick={handleSubmit}
                    className="w-full bg-primary text-background-dark font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                    disabled={rating === 0}
                >
                    登録
                </button>
            </div>
        </div>
    );
};

export default EvaluationPostPage;

