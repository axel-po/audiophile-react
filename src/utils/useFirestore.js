import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase";

export function useFirestore(product) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!product) {
      return;
    }

    onSnapshot(collection(db, product), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [product]);

  return products;
}
