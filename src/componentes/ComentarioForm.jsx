import { React, useState } from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'

const ComentarioForm = ({handleAdd}) => {

    const[ text , setText ] = useState('');
    const[rating , setRating] = useState(10);

    const handleTextChange = (e) => {
        setText( e.target.value )
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const newcomentario = {
                comentario: text, 
                calificacion: rating
        }

       handleAdd(newcomentario )
       setText('')
        
    }

  return (
    <Card>
        <form onSubmit={ handleSubmit }>
            <ComentarioCalificacion select={(rating)=> setRating(rating) } />
            <div className='input-group'>
                        <input type='text' 
                               value={ text }
                               onChange={   handleTextChange  } 
                               placeholder='Ingrese su comentario aquí' />
                        <button>
                            Guardar
                        </button>
            </div>
        </form>
       
    </Card>
  )
}

export default ComentarioForm

