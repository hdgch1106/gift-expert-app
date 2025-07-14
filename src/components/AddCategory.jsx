import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('')

const onInputChange = (event) => {
    setInputValue(event.target.value);
};

const onSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (inputValue.trim().length <= 1) return; // Prevent adding empty categories       
    // Call the function to add the category
    //setCategories(categories => [ ...categories, inputValue]);
    onNewCategory(inputValue.trim());
    
    setInputValue(''); // Clear the input field after submission
}

  return (
    <form onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onInputChange }
        />
     </form>
    
  )
}
