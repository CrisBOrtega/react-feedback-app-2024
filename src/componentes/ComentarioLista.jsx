
import {motion, AnimatePresence} from 'framer-motion'
import React from 'react';
import {useContext} from "react";
import FeedBackContext from "../context/FeedBackContext";
import ComentarioItem from './ComentarioItem';

function ComentarioLista() {


    const { comments } = useContext(FeedBackContext);

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
                                                item={comentario}
                                               //ya no se necesita el delete  en item
                                               
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