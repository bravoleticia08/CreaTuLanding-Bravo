import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

//TODOS los productos
export async function getProducts() {
  const colRef = collection(db, "items");   
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// por ID
export async function getProductId(id) {
  const docRef = doc(db, "items", id);  
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...snapshot.data() };
}

// por categoría
export async function productsCategory(categoryId) {
  const colRef = collection(db, "items"); 
  const q = query(colRef, where("category", "==", categoryId));

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
