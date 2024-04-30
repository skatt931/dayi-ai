export type AiToolData = {
  id: number;
  createdAt: number;
  updatedAt: number;
  promoted: boolean;
  pros: string[];
  cons: string[];
  categories: string[];
  specialTags: string[];
  title: string;
  shortDescription: string;
  completeDescription?: string;
  imageUrl: string;
  pricing: string;
  linkToTool: string;
  likes: number;
  docID?: string;
};

export enum CATEGORIES {
  // Text
  Text_Generation = 'Генерація Тексту',
  Copywriting = 'Копірайтинг',
  Email_Assistant = 'Email Асистент',
  General_Writing = 'Загальне Письмо',
  Prompts = 'Підказки',
  SEO = 'SEO',
  Soacaial_Media = 'Соціальні Мережі',
  Story_Writing = 'Історії',
  Summarization = 'Підсумок',
  // Image
  Art = 'Мистецтво',
  Image_Editing = 'Редагування Зображень',
  Image_Generation = 'Генерація Зображень',
  Code = 'Код',
  // Audio
  Music = 'Музика',
  Text_To_Speech = 'Текст в Голос',
  Audio_Editing = 'Редагування Аудіо',
  Video = 'Відео',
  // 3D
  ThreeD = '3D',
  // Bussiness
  Education = 'Освіта',
  Customer_Support = 'Підтримка Клієнтів',
  Finance = 'Фінанси',
  Productivity = 'Продуктивність',
  // Other
  Fun = 'Розваги',
  Lifestyle = 'Стиль Життя',
  Search_Engine = 'Пошуковик',
}

export enum PRICING {
  FREE,
  FREEMIUM,
  PAID,
}

export enum SPECIAL_TAGS {
  MADE_IN_UKRAINE,
  PROMOTED,
}
