import React, { useState } from 'react'
import { useEffect } from 'react';
import Mealindex from './Mealindex'
import Mealitem from './Mealitem'

const Meal = () => {
   const[url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   const [item,setItem]=useState();
   const[show,setShow]=useState(false);
   const[search,setsearch]=useState(" ")
   useEffect(()=>{
      fetch(url).then(res=>res.json()).then(data=>{
         console.log(data);
         setItem(data.meals);
         setShow(true);
      })
   },[url]);
    const searchRecipe=(evt)=>{
      if(evt.key=="Enter"){
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      }
    }
   const setitemindex=(alphaindex)=>{
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphaindex}`)
   }
  return (
    <>
      <div className="main">
         <div className="heading">
            <h1>Search your favorite recipe</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Harum dicta laborum commodi saepe. lorem Ullam.</h3>
         </div>
   
         <div className="searchitem">
            <input type="search" className="searchitem"  onChange={e=>setsearch(e.target.value)}
            onKeyPress={searchRecipe}/>
         </div>
         <div className="container">
           {
            show?<Mealitem item={item}/>:" Not found"
           }
         </div>
         <div className="indexcontainer">
             <Mealindex setitemindex={(alphaindex)=>setitemindex(alphaindex)}/>
         </div>
     </div>
    </>
  )
}

export default Meal;
