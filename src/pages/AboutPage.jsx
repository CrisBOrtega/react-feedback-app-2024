import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../componentes/Card'

function AboutPage() {
  return <Card>
    <div className='about'>
        <h1>About this project</h1>
        <p>this is a react app</p>
        <p>version 1.0.0</p>
        <p>
            <Link to="/">Back To Home</Link>
        </p>
    </div>
  </Card>
}

export default AboutPage