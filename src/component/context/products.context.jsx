import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments, getUserDocuments } from "../utils/firebase";


export const ProductsContext = createContext({
    categoriesMap: {},
});

export const ProductsProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [userDisplayName, setDisplayUserName] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoriesMap = await getCategoriesAndDocuments();
           console.log(categoriesMap);
           setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    }, []);

    useEffect(() => {
        const getUserMap = async () => {
            const usersMap = await getUserDocuments(); 
            setDisplayUserName(usersMap);
            console.log(usersMap)
        }
        getUserMap();
    }, []); 

    const value = {
        categoriesMap,
        userDisplayName
    }
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}