import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './App.css'
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

class App extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
        title: 'Terry Punk',
        headerLinks: [
          { title: 'Home', path: '/' },
          { title: 'About', path: '/about' },
          { title: 'Contact', path: '/contact'}
        ],
        home: {
          title: 'Be Relentless',
          subTitle: 'Projects that make a difference',
          text: 'Checkout my projects below'
        },
        about: {
          title: 'About Me Terry Punk',
        },
        contact: {
          title: 'Let\'s Talk, punk'
        }
      }
    }
    
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" >
            <Navbar.Brand>Terry Jerk</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>

        
      </Router>
    )
  }
}

export default App

