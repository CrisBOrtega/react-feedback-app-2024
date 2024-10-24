
import { BrowserRouter as Router , Route, Routes, NavLink } from 'react-router-dom';
import {React } from 'react'
import Header from './componentes/Header';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import AboutIconLink from './componentes/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Card from './componentes/Card';
import Post from './componentes/Post';
import {FeedBackProvider} from "./context/FeedBackContext";

function App() {
    //ya no necesitamos el estado nase en app

    const titulo =  "App de Comentarios";
    const Autor = "Cristian Buitrago"

 
  return (
      <FeedBackProvider>
          <Router>
              <div className='container' >
                  <Header
                      titulo={ titulo }
                      autor={ Autor } />
                  <Routes>
                      <Route exact path='/' element={
                          <>
                              <ComentarioForm />
                              <ComentarioStats />
                              <ComentarioLista />
                          </>
                      }>
                      </Route>
                      <Route path="/about"  element={<AboutPage />} />
                      <Route path="/post/:id" element={<Post />} />
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
      </FeedBackProvider>

    
  )
}

export default App;