import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

export const getOriginalUrl = async (id) => {
  const docRef = doc(db, 'shortenedUrls', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().originalUrl;
  } else {
    return null;
  }
};