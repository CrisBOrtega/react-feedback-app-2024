import {React , useState} from 'react'

const ComentarioCalificacion = ({select}) => {

    const[ selected , setSelected] = useState(2)


    const handleChange=(e)=>{
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

  return (
    <ul className='rating'>
        <li key="1">
            <input
                type="radio"
                id="num1"
                name="calificacion"
                value="1"
                onChange={ handleChange }
                checked={ selected === 1 }

            />
            <label htmlFor='num1' >1</label>
        </li>
        <li key="2">
            <input
                type="radio"
                id="num2"
                name="calificacion"
                value="2"
                onChange={ handleChange }
                checked={ selected ===2 }

            />
            <label htmlFor='num2' >2</label>
        </li>
    </ul>
  )
}

export default ComentarioCalificacion