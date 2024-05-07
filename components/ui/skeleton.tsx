import React from 'react';

const Skeleton = () => {
  return (
    <div className="">
      <div className="flex w-[600px] flex-col gap-4">
        <div className="skeleton h-52  w-full"></div>
        {/* <div className="skeleton h-4 w-28"></div> */}
        {/* <div className="skeleton h-4 w-full"></div> */}
        {/* <div className="skeleton h-4 w-full"></div> */}
      </div>
    </div>
  );
};

export default Skeleton;
