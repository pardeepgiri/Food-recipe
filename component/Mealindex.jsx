import React from 'react'

const Mealindex = ({setitemindex}) => {

    const Alpha=["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  return (
    <>
        {
            Alpha.map((item)=>{
                return(
                   <div className="mealindex"  onClick={()=>setitemindex(item)}>
                    <div>{item}</div>
                   </div>
                )
            })
        }
    </>
  )
}

export default Mealindex