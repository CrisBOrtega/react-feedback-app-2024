import React from 'react'
import {useContext} from "react";
import FeedBackContext from "../context/FeedBackContext";


const ComentarioStats = ({ comentarios }) => {

    const { comments } = useContext(FeedBackContext);

  return (
    <div className='feedback-stats'>
        {/* El numero de comentarios que hay 
            en el arreglo de comentario    
        */}
        <h4> Comentarios: { comments.length }  </h4>
        {/* El promedio de Calificaciones 
            de los comentarios en el arreglo
            reduce
        */}
        <h4> Calificación promedio:  </h4>
    </div>
  )
}

export default ComentarioStats