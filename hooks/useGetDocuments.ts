import { firebaseDB } from '@/firebase';
import { AiToolData } from '@/types';
import {
  collection,
  doc,
  endAt,
  getDoc,
  getDocs,
  orderBy,
  query,
  startAt,
} from 'firebase/firestore';

export const useGetDocuments = () => {
  const getDoc = async (path: string, limitFrom?: number, limitTo?: number) => {
    const collectionRef = collection(firebaseDB, path);
    const q = await query(
      collectionRef,
      orderBy('id', 'asc'),
      startAt(limitFrom || 0),
      endAt(limitTo || 2),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      docID: doc.id,
    }));
    return data as unknown | AiToolData[];
  };

  return { getDoc };
};

export const useGetDocumentById = () => {
  const getDocById = async (path: string, id: string) => {
    const collectionRef = collection(firebaseDB, path);
    const docRef = doc(collectionRef, id);
    const docSnapshot = await getDoc(docRef);
    const data = docSnapshot.data();
    return data as unknown | AiToolData;
  };

  return { getDocById };
};
