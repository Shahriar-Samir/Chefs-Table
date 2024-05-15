// creating recipe element for recipe section

const Recipe = ({recipe,addRecipe}) => {
    // destructuring recipe object

    const {recipe_img,recipe_name,short_description,preparing_time,ingredients,calories} = recipe

    return (
        <div className="p-6 bg-base-100 border border-gray-300 rounded-2xl flex flex-col justify-between">
        <div className="">
        <img src={`${recipe_img}`} className='rounded-2xl w-full h-[200px] object-cover'/>
          <h2 className="mt-4 text-xl font-semibold">{recipe_name}</h2>
          <p className='mt-4 font-normal text-base text-[#878787] fira-sans'>{short_description}</p>
          <hr className='mt-4'/>
          <h3 className='mt-6 text-lg font-medium'>Ingredients {ingredients.length}</h3>
          <ul className='list-disc ps-6 mt-4 font-normal fira-sans text-base text-[#878787]'>
          {ingredients.map(ingredient=>{
              return <li key={ingredient}>{ingredient}</li>
            })}
          </ul>
            <hr className='mt-4'/>
            <div className='mt-7 fira-sans flex gap-[22px]'>
              <div className='flex gap-3'>
              <img src='./icons/clock.svg' className='w-5'/>
              <p>{preparing_time} minutes</p>
              </div>
              <div className='flex gap-3'>
              <img src='./icons/fire.svg' className='w-4'/>
              <p>{calories} calories</p>
              </div>
            </div>
        </div>
        <button onClick={()=>{addRecipe(recipe)}} className="mt-6 text-lg font-semibold rounded-[50px] bg-green-400 px-6 py-3 hover:bg-green-500 ">Want to cook</button>
      </div>
    );
};

export default Recipe;  