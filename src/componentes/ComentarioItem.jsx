import {React , useState } from 'react'
import Card from './Card'
import {useContext} from "react";
import FeedBackContext from "../context/FeedBackContext";
import { FaCircle } from 'react-icons/fa'

const ComentarioItem = ({ item }) => {

    const {borrarItem} = useContext(FeedBackContext)

    //manejo del estado de un comentario:
    //comentario y calificacion como atributos
    //mediante el uso de Estados
    const [ comment, setComment ] = useState(item.comentario)
    const [ rating , setRating  ] = useState(item.calificacion)
    const [ identificacion , 
            setIdentificacion  ] = useState(item.id)
  
  return (
    <Card reverse={false}>
        <div className='num-display'>{  rating }</div>
        <button 
            onClick={ () =>  borrarItem(identificacion) }
            className='close'
            >
          <FaCircle color='purple' />
        </button>
        
        <div className='text-display'>{ comment }</div>
       
    </Card>
  )
}

export default ComentarioItem