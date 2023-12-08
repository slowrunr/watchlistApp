import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {
  collection,
  setDoc,
  getDocs,
  writeBatch,
  doc,
  serverTimestamp,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOXDAhoDwBuiuHSMuC_8TnbjYyQoIR3vA",
  authDomain: "todo-list-2k24.firebaseapp.com",
  projectId: "todo-list-2k24",
  storageBucket: "todo-list-2k24.appspot.com",
  messagingSenderId: "457538188677",
  appId: "1:457538188677:web:1918ccec749b3a62ae40ec",
};

export function createStorage(key) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    key,
    db,
    pull: async function () {
      const ref = collection(this.db, this.key);
      const q = query(ref, orderBy("createdAt"));
      const querySnapshot = await getDocs(q);
      const todos = [];

      querySnapshot.forEach((doc) => {
        todos.push({
          id: doc.id,
          title: doc.data().title,
          done: doc.data().done,
        });
      });

      return todos;

      //   const data = localStorage.getItem(this.key);
      //   if (!data) {
      //     return null;
      //   }
      //   return JSON.parse(data);
    },
    push: async function (todo) {
      try {
        await setDoc(doc(this.db, this.key, todo.id), {
          title: todo.title,
          done: todo.done,
          createdAt: serverTimestamp(),
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // const preparedData = JSON.stringify(data);
      // localStorage.setItem(this.key, preparedData);
    },
    delete: async function ({ todosIds }) {
      const batch = writeBatch(this.db);

      todosIds.forEach((id) => {
        const ref = doc(this.db, this.key, id);
        batch.delete(ref);
      });

      await batch.commit();
    },
    update: async function (todo) {
      const ref = doc(this.db, this.key, todo.id);

      console.log(todo);
      await updateDoc(ref, {
        done: todo.done,
      });
    },
    //--another version of function 'update'
    // update: async function (todo) {
    //   try {
    //     await updateDoc(doc(this.db, this.key, todo.id), {
    //       id: todo.id,
    //       done: todo.done,
    //     });
    //   } catch (e) {
    //     console.error("Error", e);
    //   }
    // },
  };
}
