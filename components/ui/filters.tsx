import { cn } from '@/lib/utils';
import React from 'react';

const Filters = ({ title }: { title: string }) => {
  return (
    <div className={cn('form-control mt-5 mr-5 lg:mt-10')} role="list">
      <label
        className={
          (cn('label cursor-pointer'),
          'justify-start space-x-3 flex items-center')
        }
      >
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-xs"
          arial-label="ai detection"
        />
        <div className={cn('label-text', 'cursor-pointer text-xs')}>
          {title}
        </div>
      </label>
    </div>
  );
};

export default Filters;
