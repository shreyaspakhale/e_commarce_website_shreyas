import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, size = 16, interactive = false, onRate }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const isFull = i <= Math.floor(rating);
        const isHalf = !isFull && i === Math.ceil(rating) && rating % 1 !== 0;
        
        return (
          <button
            key={i}
            disabled={!interactive}
            onClick={() => onRate?.(i)}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
          >
            {isFull ? (
              <Star size={size} className="fill-yellow-400 text-yellow-400" />
            ) : isHalf ? (
              <StarHalf size={size} className="fill-yellow-400 text-yellow-400" />
            ) : (
              <Star size={size} className="text-gray-300" />
            )}
          </button>
        );
      })}
    </div>
  );
};
