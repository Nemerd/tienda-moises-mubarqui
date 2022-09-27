// import "dotenv/config";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, getDocs, addDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA9Nd8VASNtP15y4POwyz-C94VTPNPHu8o",
	authDomain: "tienda-moises-mubarqui.firebaseapp.com",
	projectId: "tienda-moises-mubarqui",
	storageBucket: "tienda-moises-mubarqui.appspot.com",
	messagingSenderId: "527645983730",
	appId: "1:527645983730:web:0e6efb04c6820e6c84e16b",
	measurementId: "G-60BLY67ZK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

async function getCatalog() {
	const catalog = await getDocs(collection(db, "Películas"));
	const arrayDeIDs = catalog.docs.map( i => i.id)
	const arrayDeProductos = catalog.docs.map( i => i.data());
	return [arrayDeProductos, arrayDeIDs];
	// Listo para entregar NO TOCAR MÁS
}

async function getProduct(id) {
	const docu = await getDoc(doc(db, "Películas", id))
	const product = docu.data()
	return product;
	// Listo para entregar NO TOCAR MÁS	
}

async function setOrder(setThis){
	const col = collection(db, "Películas")
	const newDocId = await addDoc(col, setThis)
	return newDocId.id
	// Listo para entregar NO TOCAR MÁS
}


export { db, app, getCatalog, getProduct, setOrder }