// @/utils/urlService.js
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

export const joinGame = async (joinCode, userId) => {
  const gameRef = doc(db, 'games', joinCode);
  const gameSnap = await getDoc(gameRef);

  if (!gameSnap.exists()) {
      throw new Error('Game not found');
  }

  const game = gameSnap.data();

  if (game.player2) {
      throw new Error('Game is already full');
  }

  await updateDoc(gameRef, {
      player2: userId,
  });
};