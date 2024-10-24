
import {motion, AnimatePresence} from 'framer-motion'
import React from 'react';
import ComentarioItem from './ComentarioItem';

function ComentarioLista({ comments,
                           handleDelete }) {

   

    if(comments.length === 0 || !comments  ){
        return <p> No hay comentarios </p>
    }else{
        return (
            <div className='feedback-list'>
                            <AnimatePresence>
                                {
                                    comments.map( comentario  => 
                                        <motion.div
                                            key={comentario.id}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity:0}}>
                                        <ComentarioItem 
                                                key={comentario.id}
                                                comentario={comentario.comentario}
                                                calificacion={comentario.calificacion}
                                                id = { comentario.id }
                                                handleDelete={handleDelete}
                                               
                                        />
                                        </motion.div>
                                    )
                                }
                           </AnimatePresence>
                
            </div>
          )
    }

 
}

export default ComentarioLista