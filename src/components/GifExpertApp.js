import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Naruto'] );

    return (
        <div className='contenedor-principal'>
            <h1>Buscador de Gifs</h1>

            <AddCategory setCategories= {setCategories} />
            <hr />

            <ol>
                { categories.map( (category) => {
                    return <GifGrid key={category} category = { category }/>
                })}
            </ol>
        </div>
    )
}
