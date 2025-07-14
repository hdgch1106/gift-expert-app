import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/gifgrid";
 
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCaterogy) => {
        if( categories.includes(newCaterogy)) return; // Prevent adding duplicate categories
        //setCategories([...categories, newCaterogy]);
        setCategories(cat => [ newCaterogy, ...cat]);
    };

    return (
        <>
            {/* titulo */}
            <h1>Gift Expert App</h1>

            {/* input */}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            /> 
            {/* listado de gif */}

                 {
                    categories.map((e) => (
                                <GifGrid key={e} category={e}/>
                            ))
                }
        </>
    )
}