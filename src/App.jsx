import {React , useState } from 'react'
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {

    const [comments , 
          setComments ] = useState(comentarios)
    
    const borrarItem = id => {
            if(window.confirm
                  ("Está seguro de borrar el comentario?")){
                //asignar nuevo estado a comments:
                //filter: para quitar los comentarios
                //cuyo id concuerde con el parametro 
                setComments(comments.filter((c)=> c.id !== id   )  )    
            }
    }        

    const titulo =  "App de Comentarios";
    const Autor = "Cristian Buitrago"

 
  return (
    <div className='container' >
        <Header 
            titulo={ titulo }
            autor={ Autor } />
        <ComentarioForm />      
        <ComentarioStats comentarios={comments} />     
        <ComentarioLista
         comments={comments}
         handleDelete={borrarItem}  />   
          
    </div>
    
  )
}

export default App;