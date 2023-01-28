import React, { useState } from "react";
import { useParams } from "react-router";
function Mealinfo(){
    const {MealId}=useParams();
    const[itemdetail,setItemdetail]=useState();
    if(MealId!==""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals[0])
            setItemdetail(data.meals[0]);
        })
    }
    return(
        <div>
          {
            (!itemdetail)?"":(<>
            <div className="content">
                <img src={itemdetail.strMealThumb} alt="" />
                <div className="inner-content">
                 <h1>{itemdetail.strMeal}</h1>
                 <h2>{itemdetail.strArea} food</h2>
                 <h3>Category:{itemdetail.strCategory}</h3>
                </div>
           
            </div>
             <div className="inner-gradient">
                 <div className="ingradient">
                    <h2>Ingredient</h2>
                    <h3>{itemdetail.strIngredient1}:{itemdetail.strMeasure1}</h3>
                    <h3>{itemdetail.strIngredient2}:{itemdetail.strMeasure2}</h3>
                    <h3>{itemdetail.strIngredient3}:{itemdetail.strMeasure3}</h3>
                    <h3>{itemdetail.strIngredient4}:{itemdetail.strMeasure4}</h3>
                    <h3>{itemdetail.strIngredient5}:{itemdetail.strMeasure5}</h3>
                    <h3>{itemdetail.strIngredient6}:{itemdetail.strMeasure6}</h3>
                    <h3>{itemdetail.strIngredient7}:{itemdetail.strMeasure7}</h3>
                    <h3>{itemdetail.strIngredient8}:{itemdetail.strMeasure8}</h3>
                  
                 </div>
                 <div className="instruction">
                    <h2>Instructions</h2>
                    <h3>   {itemdetail.strInstructions}</h3>
                 </div>
             </div>
            
         </>)
          }
        </div>
    )
}
export default Mealinfo;