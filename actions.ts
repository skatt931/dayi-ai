'use server';

import { redirect } from 'next/navigation';

export const updateFilterCategories = async (formData: any) => {
  const categoriesFilters = formData.getAll('categories');
  const query = formData.getAll('query');
  console.log('query!!!', query);

  // if (categoriesFilters.length > 0) {
  //   const params = new URLSearchParams([
  //     ['categories', categoriesFilters.join(',')],
  //   ]);
  //   redirect(`/uk/?${params.toString()}`);
  // } else {
  //   redirect('/uk/');
  // }
};
