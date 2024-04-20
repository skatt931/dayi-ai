'use client';

import React from 'react';

const Search = () => {
  return (
    <div className="join w-full max-w-full flex">
      <div className="basis-2/3 w-2/3">
        <div>
          <input
            className="input input-bordered w-full join-item"
            placeholder="Знайди свій інструмент AI"
          />
        </div>
      </div>
      <select className="select select-bordered join-item basis-1/3 w-1/3 lg:max-w-fit">
        <option disabled selected>
          Сортувати
        </option>
        <option>Нові</option>
        <option>Популярні</option>
        <option>За назвою (А-Я)</option>
        <option>За назвою (Я-А)</option>
        <option>За датою додавання (нові-старі)</option>
        <option>За датою додавання (старі-нові)</option>
      </select>
      {/* <div className="indicator">
        <span className="indicator-item badge badge-secondary">new</span>
        <button className="btn join-item">Search</button>
      </div> */}
    </div>
  );
};

export default Search;
