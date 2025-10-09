"use client";
import { FC, useState } from 'react';
import MaterialIcon from './MaterialIcon';

interface Props {
  count?: number;
  rating: number;
  onRatingChange: (newRating: number) => void;
  className?: string;
}

const StarRating: FC<Props> = ({ count = 5, rating, onRatingChange, className }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className={`flex justify-center items-center text-4xl text-yellow-400 ${className}`}>
      {[...Array(count)].map((_, index) => {
        const starRating = index + 1;
        return (
          <span
            key={starRating}
            className="cursor-pointer"
            onClick={() => onRatingChange(starRating)}
            onMouseEnter={() => setHoverRating(starRating)}
            onMouseLeave={() => setHoverRating(0)}
          >
            <MaterialIcon 
              name={(hoverRating || rating) >= starRating ? 'star' : 'star_outline'} 
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;

