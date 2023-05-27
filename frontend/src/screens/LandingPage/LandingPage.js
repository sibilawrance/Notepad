import React from 'react'
import './LandingPage.css'
import { Container, Row } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div className='main'>
    <Container>
    <Row>
    <div className='intro-text'>
       <div>
        <h1 className='title'>Welcome to Notepad</h1>
        <p className='subtitle'>One safe place for all your notes</p>
       </div>
       <div className='buttonContainer'>
        <a href="/login">
          <button  variant="outline-primary" size="lg" className='landingbutton'>LOGIN</button>
        </a>
        <a href="/register">
          <button  variant="outline-primary" size="lg" className='landingbutton'>REGISTER</button>
        </a>
       </div>
    </div>
    </Row>
    
    </Container>
      
    </div>
  )
}

export default LandingPage
