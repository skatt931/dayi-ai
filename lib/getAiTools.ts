import prismadb from '@/lib/prismadb';

export const getAiTools = async () => {
  const aiTools = await prismadb.aiTool.findMany();
  return aiTools;
};

export const getCategories = async () => {
  const categories = await prismadb.category.findMany();
  return categories;
};

export const getSpecialCategories = async () => {
  const specialCategories = await prismadb.specialTag.findMany();
  return specialCategories;
};
