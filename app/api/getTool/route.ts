import { firebaseDB } from '@/firebase';
import { AiToolData } from '@/types';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export async function GET() {
  // const aiToolsCol = collection(firebaseDB, 'tools');
  // const aiToolsSnapshot = await getDocs(aiToolsCol);
  // console.log('citySnapshot!!!!!!!:: ', aiToolsSnapshot);

  // const toolsList = aiToolsSnapshot.docs.map((doc) => doc.data());
  // console.log('cityList!!!!!!!:: ', toolsList);

  // await addDoc(collection(firebaseDB, 'tools'), {
  //   id: 23,
  //   createdAt: Date.now(),
  //   updatedAt: Date.now(),
  //   promoted: false,
  //   pros: [
  //     'Потенційно висока продуктивність',
  //     'Широкий спектр можливостей',
  //     'Розроблено Google AI',
  //   ],
  //   cons: [
  //     'Недоступний для публічного використання',
  //     'Деталі можливостей невідомі',
  //   ],
  //   categories: ['Text_Generation', 'Code', 'Summarization'], // Replace "Others" with specific categories if revealed publicly
  //   specialTags: ['DAI_AI_CHOICE'],
  //   title: 'Pi',
  //   shortDescription:
  //     'Pi - мовна модель, розроблена для саморозвитку та навчання.',
  //   completeDescription:
  //     'Pi, ваш персональний штучний інтелект, - це вдосконалений інструмент штучного інтелекту, призначений для допомоги користувачам у виконанні широкого спектру завдань, таких як відповіді на запитання, надання інформації, створення творчого контенту та автоматизація повторюваних завдань. Його можна використовувати в освітніх цілях, для підвищення продуктивності, розваг та особистої допомоги. Люди можуть захотіти використовувати Pi через його зручність у швидкому доступі до величезної бази знань, його здатність оптимізувати робочий процес і його потенціал для стимулювання творчості, генеруючи ідеї та рішення, які користувачі, можливо, не розглядали. Незалежно від того, чи ви використовуєте Pi для професійних цілей, чи для особистих, він є універсальним помічником, який економить час у різних аспектах повсякденного життя.',
  //   imageUrl: 'https://i.postimg.cc/3J224C1J/Pi.webp',
  //   pricing: 'free',
  //   linkToTool: 'https://pi.ai/discover',
  //   likes: 0,
  // });

  return Response.json('All good man!');
}
