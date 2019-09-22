import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

export const Footer: React.FC =()=>{
    return (
             <Navbar bg="dark" variant="dark" className='foot'>
                <Nav className="mr-auto">
                    <Nav.Link href="https://www.imdb.com/title/tt2861424/?ref_=nv_sr_1?ref_=nv_sr_1">IMDB</Nav.Link>
                    <Nav.Link href="https://www.facebook.com/RickandMorty/">FaceBook</Nav.Link>
                    <Nav.Link href="https://twitter.com/RickandMorty?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</Nav.Link>
                   
                </Nav>    
            </Navbar>
    )
}