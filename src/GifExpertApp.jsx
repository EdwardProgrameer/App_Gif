import{useState} from 'react';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch','Dragon Ball'])

const  onAddCategory = () => {

// setCategories([...categories,'valorant'])
setCategories ( cat => [...cat, 'valorant'])
}

  return (
    <>
    {/*titulo */}
    <h1>GifExpertApp</h1>
    {/*Input */}
    {/* listado de git */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
      {categories.map(category => {
       return <li key = {category}>{category}</li>
      })
      }
    </ol>
    {/*git Item */}
    </>
  )
}
