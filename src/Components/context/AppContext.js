import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "productos");
        getDocs(itemCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
        });
    }, [])


    return <AppContext.Provider value={{ products }}>
            {children}
        </AppContext.Provider>
    
}
export default AppContextProvider