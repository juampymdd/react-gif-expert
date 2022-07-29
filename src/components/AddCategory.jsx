import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newCategory = inputValue.trim()
        if(newCategory.length <= 2) return;

        onNewCategory(newCategory)
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}