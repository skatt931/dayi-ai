import { AiToolData, CATEGORIES } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const categoryValues = Object.values(CATEGORIES);
export const categoryKeys = Object.keys(CATEGORIES);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isSubstringInText(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export const searchFilterTools = (
  searchQuery: string,
  aiTools: AiToolData[],
) => {
  if (!searchQuery) return aiTools;

  return aiTools.filter(
    (tool) =>
      isSubstringInText(tool.title, searchQuery) ||
      isSubstringInText(tool.shortDescription, searchQuery) ||
      tool.categories.some((tag) => isSubstringInText(tag, searchQuery)) ||
      tool.specialTags.some((tag) => isSubstringInText(tag, searchQuery)),
  );
};

export const filterByCategory = (filterQuery: string, tools: AiToolData[]) => {
  if (!filterQuery) return tools;
  return tools.filter((tool) =>
    filterQuery
      .split(',')
      .some((category) => tool.categories.includes(category)),
  );
};

type SortFunction = (a: AiToolData, b: AiToolData) => number;
type SortFunctions = { [key: string]: SortFunction };

export const sortTools = (
  sortQuery: string,
  aiTools: AiToolData[],
): AiToolData[] => {
  let sortedTools = [...aiTools];
  const sortFunctions: SortFunctions = {
    new: (a, b) => a.id - b.id,
    popular: (a, b) => b.likes - a.likes,
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
    'new-old': (a, b) => a.createdAt - b.createdAt,
    'old-new': (a, b) => b.createdAt - a.createdAt,
  };

  if (sortFunctions[sortQuery]) {
    sortedTools.sort(sortFunctions[sortQuery]);
  }

  return sortedTools;
};
