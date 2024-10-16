import React from 'react'

const ComentarioCalificacion = () => {
  return (
    <ul className='rating'>
        <li key="1">
            <input
                type="radio"
                id="num1"
                name="calificacion"
                value="1"

            />
            <label htmlFor='num1' >1</label>
        </li>
        <li key="2">
            <input
                type="radio"
                id="num2"
                name="calificacion"
                value="2"

            />
            <label htmlFor='num2' >2</label>
        </li>
    </ul>
  )
}

export default ComentarioCalificacion