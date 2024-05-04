import { cn } from '@/lib/utils';
import React from 'react';
import Filters from './Filters';

const DialogWindow = () => {
  return (
    <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
      <div className={cn('modal-box', 'max-h-96')}>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3>Фільтри</h3>
        <Filters />
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Закрити</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Закрити</button>
      </form>
    </dialog>
  );
};

export default DialogWindow;
