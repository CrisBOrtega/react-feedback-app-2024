import React from 'react'

const ComentarioStats = ({ comentarios }) => {



  return (
    <div className='feedback-stats'>
        {/* El numero de comentarios que hay 
            en el arreglo de comentario    
        */}
        <h4> Comentarios:    </h4>
        {/* El promedio de Calificaciones 
            de los comentarios en el arreglo
            reduce
        */}
        <h4> Calificación promedio:  </h4>
    </div>
  )
}

export default ComentarioStats