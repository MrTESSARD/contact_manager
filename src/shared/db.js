// import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore/lite';

const config = fsConfig;

// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app);

// const db = app.
// db.settings({timestampsInSnapshots:true})


// Fonction pour obtenir une liste de contacts depuis la base de données
// async function getContacts() {
//     const contactsCol = collection(db, 'contacts');
//     const contactsSnapshot = await getDocs(contactsCol);
//     const contactList = contactsSnapshot.docs.map(doc => doc.data());
//     console.log(contactList);
//     return contactList;
//   }
  
//   // Appeler la fonction pour obtenir la liste de contacts
//   getContacts();
  
  export default {
    async create(contact) {
      try {
        const contactsCol = collection(db, 'contacts');
        console.log('Contact ajouté avec succès.');
       return await addDoc(contactsCol, contact);
        // return contactList;
      } catch (error) {
        console.error('Erreur lors de l\'ajout du contact :', error);
      }
    },
    async read() {
      try {
        const contactsCol = collection(db, 'contacts');
        const contactsSnapshot = await getDocs(contactsCol);
        const contactList = contactsSnapshot.docs.map(doc => doc.data());
        return contactList;
      } catch (error) {
        console.error('Erreur lors de la lecture des contacts :', error);
        return [];
      }
    },
   
  };