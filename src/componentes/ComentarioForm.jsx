import { React, useState, useContext } from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'
import FeedBackContext from "../context/FeedBackContext";

const ComentarioForm = () => {

    const { addComentario } = useContext(FeedBackContext)

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

       addComentario(newcomentario )
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

