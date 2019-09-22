import React from 'react';
import { Navbar, Nav, Carousel, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './App.css';

export const Header: React.FC =()=>{
    return <div id='head'>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href={'/'}>The Rick and Morty</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to={'/'}><Button variant="dark">Characters</Button></Link>
              <Link to={'/planets'}><Button variant="dark">Planets</Button></Link>
              <Link to={'/episodes'}><Button variant="dark">Episodes</Button></Link>      
            </Nav>            
            </Navbar.Collapse>
          </Navbar>

          <Carousel className='carousel'>
            <Carousel.Item className='carouselItem'>
              <img
                className="carouselImg"
                src="https://backgroundcheckall.com/wp-content/uploads/2017/12/cartoon-space-background-1.jpg"
                alt="First slide"
              />    
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
              <img
                className="carouselImg"
                src="https://s3.envato.com/files/187615106/Kids%20Party%20Cartoon%20Space%20Background%20%20%2001_preview1%20.JPG"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
              <img
                className="carouselImg"
                src="https://ae01.alicdn.com/kf/HTB1QZI1fbSYBuNjSspiq6xNzpXaj.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

    </div>
}