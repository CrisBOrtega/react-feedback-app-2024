import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router , Route, Routes, NavLink } from 'react-router-dom';
import {React , useState } from 'react'
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import AboutIconLink from './componentes/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Card from './componentes/Card';

function App() {

    const [comments , 
          setComments ] = useState(comentarios)


    const addComentario = (newComentario) => {
      newComentario.id = uuidv4();
       
      setComments([newComentario , ...comments]) 
      console.log(comments)
    }
    
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
    <Router>
    <div className='container' >
        <Header 
            titulo={ titulo }
            autor={ Autor } />
        <Routes>
          <Route exact path='/' element={
            <>
                <ComentarioForm handleAdd={addComentario}/>      
                <ComentarioStats comentarios={comments} />     
                <ComentarioLista
                comments={comments}
                handleDelete={borrarItem}  /> 
            </>
          }>
          </Route>
          <Route path="/about"  element={<AboutPage />} /> 

        </Routes>  

        <Card>
            <NavLink to='/' activeClassName='active' >
              Home
            </NavLink>
            <NavLink to='/about' activeClassName='active' >
              About
            </NavLink>
        </Card>  
        <AboutIconLink /> 
    </div>
    </Router>
    
  )
}

export default App;