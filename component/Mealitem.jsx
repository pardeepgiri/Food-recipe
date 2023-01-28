import React from 'react'
import {useNavigate} from 'react-router-dom'
const Mealitem = ({item}) => {
   let navigate=useNavigate();
  return (
    <>
    {
      (!item)?"not found":item.map(items=>{
        return(
          <div className="mealitem" key={items.idMeal} onClick={()=>navigate(`/${items.idMeal}`)}>
            <img src={items.strMealThumb} alt="" />
            <h3>{items.strMeal}</h3>
          </div>
        )
      })
    }
    </>
  )
}

export default Mealitem