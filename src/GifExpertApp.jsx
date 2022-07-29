import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);
    const onNewCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;
        setCategories(prev=>[newCategory,...prev])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ onNewCategory } />
                {
                    categories.map( ( category ) => (
                            <GifGrid 
                                key={category} 
                                category={category} 
                            /> 
                        )
                    )
                }
        </>
    )
}