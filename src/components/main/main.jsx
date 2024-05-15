import { useEffect, useState } from 'react';
import Recipe from './recipe';

const Main = () => {
    // all variables and states
    const [recipes,setRecipes] = useState([])
    const [wantToCook , setWantToCook] = useState([])
    const [cookingItems , setCookingItems] = useState([])
    const [alert,setAlert] = useState(false)
    const [totalCalories , setTotalCalories] = useState(0)
    const [totalMinute , setTotalMinute] = useState(0)
    
    // handle total minute functionality
    function handleTotalMinute(time){
        const newTotalMinute = totalMinute+time
        setTotalMinute(newTotalMinute)
    }
    
    // handle total calories functionality
    function handleTotalCalories(Calories){
        const newTotalCalories = totalCalories+Calories
        setTotalCalories(newTotalCalories)
    }
    
    // adding recipe to want to cook section functionality
    function addRecipe(recipe){
        if(wantToCook.includes(recipe) || cookingItems.includes(recipe)){
            setAlert(true)
            setTimeout(()=>{
                setAlert(false)
            },1000)
            
        }       
        else{
            const newCook = [...wantToCook,recipe]
            setWantToCook(newCook)
        }
    }

    // add to currently cooking section functionality 
    function handleCooking(recipe){
            const newWantToCook = wantToCook.filter(recipeItem=> recipeItem.recipe_id !== recipe.recipe_id)
            setWantToCook(newWantToCook)
            const newCook = [...cookingItems,recipe]
            setCookingItems(newCook)
            handleTotalMinute(recipe.preparing_time)
            handleTotalCalories(recipe.calories)
    }

    // fetching recipe data from json
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=> res.json())
        .then(data=> setRecipes(data))
    },[])

    return (
        // main part starts here
        <main className='mt-5 mb-10'>

            {/* heading title starts here */}
            <h1 className='text-center mx-auto text-[40px] font-semibold'>Our Recipes</h1>
            <p className='text-center mx-auto mt-6 text-gray-500 w-8/12'>Here are our best recipes available for you to cook.</p>
            {/* heading title starts here */}

            {/* recipes list and preparing-cooking section starts here */}
            <section className='grid grid-cols-5 gap-5 mt-12'>
                <div className='col-span-3 grid lg:grid-cols-2 gap-5'>
                        {recipes.map(recipe=> <Recipe key={recipe.recipe_id} recipe={recipe} addRecipe={addRecipe}/>)}
                </div>

                {/* want to cook section starts here */}
                <div className='col-span-2'>
                    <div>
                    <h1 className='text-2xl font-semibold text-center'>Want to cook: {wantToCook.length}</h1>
                    <div className='flex justify-center'>
                    <hr className='w-10/12 mt-4'/>
                    </div>
                    <table className='mt-6'>
                            <thead>
                                <tr className='fira-sans text-[#878787] font-medium mt-4'>
                                    <th className='w-2/12 text-center py-4'></th>
                                    <th className='text-start w-3/12 py-4 px-3'>Name</th>
                                    <th className='text-start w-2/12 py-4 px-3'>Time</th>
                                    <th className='text-start w-2/12 py-4 px-3'>Calories</th>
                                    <th className='w-3/12 py-4'></th>
                                </tr>
                            </thead>
                            <tbody>
                                   {wantToCook.map((recipe,index)=>{
                                       return (
                                        <tr key={index} className='bg-[#28282808]'>
                                        <td className='text-center px-3 py-4'>{index+1}</td>
                                        <td className='px-3 py-4'>{recipe.recipe_name}</td>
                                        <td className='px-3 py-4'>{recipe.preparing_time} minutes</td>
                                        <td className='px-3 py-4'>{recipe.calories} calories</td>
                                        <td className='px-3 py-4 rounded-none' ><button className='bg-green-400 hover:bg-green-500 rounded-[50px] px-4 py-2' onClick={()=> handleCooking(recipe)}>Preparing</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            {/* want to cook section ends here */}

            {/* currently cooking section starts here */}
            <div className='mt-8'>
                    <h1 className='text-2xl font-semibold text-center'>Currently cooking: {cookingItems.length}</h1>
                    <div className='flex justify-center'>
                    <hr className='w-10/12 mt-4'/>
                    </div>
                    <table className=''>
                            <thead>
                                <tr className='fira-sans text-[#878787] font-medium mt-4'>
                                    <th className='w-1/12 text-center'></th>
                                    <th className='text-start w-2/12 py-4 pe-3'>Name</th>
                                    <th className='text-start w-2/12 py-4 px-3'>Time</th>
                                    <th className='text-start w-2/12 py-4 px-3'>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                   {cookingItems.map((recipe,index)=>{

                                       return (
                                           <tr key={index} className='bg-[#28282808]'>
                                        <td className='text-center py-4'>{index+1}</td>
                                        <td className='pe-3 py-4'>{recipe.recipe_name}</td>
                                        <td className='px-3 py-4'>{recipe.preparing_time} minutes</td>
                                        <td className='px-3 py-4'>{recipe.calories} calories</td>
                                        </tr>
                                    )
                                   })}
                            </tbody>
                        </table>    
                    </div>
                  
                        <div className='flex justify-end mt-4 gap-10'>
                            <p className='w-[110px]'>Total Time = {totalMinute} minutes</p>
                            <p className='w-[110px]'>Total Calories = {totalCalories} calories</p>
                        </div>
                </div>
            {/* currently cooking section ends here */}
            </section>
            {/* recipes list and preparing-cooking section starts here */}

            {/* toast*/}
            {alert ? <div className="toast">
            <div className="alert alert-error">
            <span className='text-white'>Already exist</span>
            </div></div> : ''}
            {/* toast*/}
            
        </main>
        // main part ends here
        );
};

export default Main;