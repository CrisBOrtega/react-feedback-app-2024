import React from 'react'



const Header = ({ autor , titulo  }) => {
  
    const headerStyles = {
        backgroundColor : 'rgba(0,0,0,0.4)' ,
        color: '#045abc'
    }
  
    return (
    <header style={headerStyles}>
        <div className='container'>
           { titulo }
           <p> Autor: { autor } </p>
        </div>
    </header>
  )
}

export default Header