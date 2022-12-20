import React from 'react'
import '../recipetile/style.css'

function Recipetile({recipe}) {
  return (
    recipe['recipe']['image'].match(/\.(jpg|png|gif|jpeg)$/) != false && (
      <div className='recipeTile'>
                <img className='recipeTile__image'
                  src={recipe['recipe']['image']}
                  alt="tile-photo"
                   onClick={()=>window.open(recipe['recipe']['url'])} />
                <p className='recipeTile__name'>{recipe["recipe"]["label"]}</p>
      </div>
    )
  )
}

export default Recipetile
