import { firebaseDB } from '@/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export async function GET() {
  // const aiToolsCol = collection(firebaseDB, 'tools');
  // const aiToolsSnapshot = await getDocs(aiToolsCol);
  // console.log('citySnapshot!!!!!!!:: ', aiToolsSnapshot);

  // const toolsList = aiToolsSnapshot.docs.map((doc) => doc.data());
  // console.log('cityList!!!!!!!:: ', toolsList);

  await addDoc(collection(firebaseDB, 'tools'), {
    id: 22,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    promoted: false,
    pros: [
      'Візуалізація зачісок',
      'Експеримент з різними стилями',
      'Веселий та інтерактивний',
    ],
    cons: ['Може бути неточним', 'Обмежені можливості безкоштовної версії'],
    categories: ['Fun'],
    specialTags: [],
    title: 'Hairstyle AI',
    shortDescription:
      'Hairstyle AI дозволяє візуалізувати зачіски на вашому фото.',
    completeDescription:
      'Hairstyle AI - це інструмент на основі штучного інтелекту, який дозволяє візуалізувати різні зачіски на вашому фото. Ви можете завантажити своє фото та спробувати різні стилі, довжину та колір волосся, щоб побачити, як вони вам пасуватимуть. Це веселий та інтерактивний спосіб експериментувати із зовнішністю.',
    imageUrl: 'https://i.postimg.cc/xTn6Nm0Q/hairstyle.webp',
    pricing: 'freemium',
    linkToTool: 'https://hairstyleai.com/',
    likes: 0,
  });

  return Response.json('All good man!');
}
