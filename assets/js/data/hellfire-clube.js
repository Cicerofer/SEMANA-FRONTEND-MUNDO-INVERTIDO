import { addDoc, collection, getFirestore, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from './app.js'

export async function subscribeToHellfireClube(subscrition) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubCollection, subscrition)
    return docRef.id
}




export async function getHellfirebaseClubSubscriptions() {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
    const subscritions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());    
    return subscritions;
}