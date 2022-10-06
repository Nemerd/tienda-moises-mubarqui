import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc, getFirestore } from "firebase/firestore";
import mock from "../mock/Items-mockup.json"

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: "tienda-moises-mubarqui.firebaseapp.com",
	projectId: "tienda-moises-mubarqui",
	storageBucket: "tienda-moises-mubarqui.appspot.com",
	messagingSenderId: "527645983730",
	appId: "1:527645983730:web:0e6efb04c6820e6c84e16b",
	measurementId: "G-60BLY67ZK0"
};

const app = initializeApp(firebaseConfig);
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

async function addOrder(setThis){
	const col = collection(db, "Películas")
	const newDocId = await addDoc(col, setThis)
	return newDocId.id
	// Listo para entregar NO TOCAR MÁS
}

function resetSimulation() {
	mock.forEach(
		async (item) => {
			await setDoc(doc(db, "Películas", item.id), item)
			console.log(item.nombre + " reseteado")
		}
	)
	// Listo para entregar NO TOCAR MÁS
}

async function modifyStock(item, quantity){
	const movie = doc(db, "Películas", item.id)
	const { stock } = await getProduct(item.id)
	await updateDoc(movie, { stock: stock - quantity})
	// Listo para entregar NO TOCAR MÁS
}


export { db, app, getCatalog, getProduct, addOrder, resetSimulation, modifyStock }