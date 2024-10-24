import React from 'react'
import Card from '../componentes/Card'

function AboutPage() {
  return <Card>
    <div className='about'>
        <h1>About this project</h1>
        <p>this is a react app</p>
        <p>version 1.0.0</p>
        <p>
            <a href="/">Back To Home</a>
        </p>
    </div>
  </Card>
}

export default AboutPage