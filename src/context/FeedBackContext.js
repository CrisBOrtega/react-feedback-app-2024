import {createContext,  useState} from "react";

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
    ]);
    //3. se pasa value para los propos de estos componentes
    return <FeedBackContext.Provider value={{
        comments
    }}>
        {children}
    </FeedBackContext.Provider>;
}
export default FeedBackContext;