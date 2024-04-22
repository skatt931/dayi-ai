import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const LikesCounter = ({
  likesNumber,
  toolId,
}: {
  likesNumber?: number;
  toolId?: number;
}) => {
  const [checked, setChecked] = useState<boolean>(
    !!localStorage.getItem(`toolID: ${toolId}`),
  );

  const handleClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    if (localStorage.getItem(`toolID: ${toolId}`)) {
      setChecked(false);
      localStorage.removeItem(`toolID: ${toolId}`);
    } else {
      localStorage.setItem(`toolID: ${toolId}`, 'true');
      setChecked(true);
    }
  };

  return (
    <div className="rating gap-1">
      <input
        type="radio"
        name="rating-3"
        onClick={(event) => handleClick(event)}
        aria-label="вподобати"
        role="radio"
        className={cn(
          'mask mask-heart bg-red-300 hover:bg-red-400',
          `${checked ? 'bg-red-400' : 'bg-red-300'} w-5`,
        )}
      />
      <span className="ml-1">
        {checked && typeof likesNumber === 'number'
          ? likesNumber + 1
          : likesNumber}
      </span>
    </div>
  );
};

export default LikesCounter;
