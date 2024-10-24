import {createContext,  useState} from "react";
import {v4 as uuidv4} from "uuid";

//1. crear contexto
const FeedBackContext = createContext();

//2. crear un provider que encapsule todos
//los componentes y el context se reconozca en todos ellos
export const FeedBackProvider = ({children}) => {

    //4. nuestros comentarios se guardan en un stado
    const [comments , setComments] = useState([
        {
            id: 1,
            comentario: 'este es un comentario context',
            calificacion: 7
        }
    ])

    //se corta add de app y se pega antes del borrar
    const addComentario = (newComentario) => {
        newComentario.id = uuidv4();

        setComments([newComentario , ...comments])
        console.log(comments)
    }


    //se corta borraritem de app y se pega despues del estado comments
    const borrarItem = id => {
        if(window.confirm
        ("Está seguro de borrar el comentario?")){
            //asignar nuevo estado a comments:
            //filter: para quitar los comentarios
            //cuyo id concuerde con el parametro
            setComments(comments.filter((c)=> c.id !== id   )  )
        }
    }



    //3. se pasa value para los propos de estos componentes
    return <FeedBackContext.Provider value={{
        comments, borrarItem, addComentario
    }}>
        {children}
    </FeedBackContext.Provider>;
}
export default FeedBackContext;