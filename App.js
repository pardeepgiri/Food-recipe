import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Meal from './component/Meal';
import Mealinfo from './component/Mealinfo';
import './component/style.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Meal/>}></Route>
        <Route path='/:MealId' element={<Mealinfo/>}></Route>
      </Routes>
    </div>
  )
}

export default App