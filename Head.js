import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import TapasIcon from '@mui/icons-material/Tapas';
import CakeIcon from '@mui/icons-material/Cake';
function Web() {
  return (
    <div>
        
        <Navbar bg="secondary" variant='white'>
        <Container>
          <Nav className="me-auto">
          <CoffeeIcon/><Nav.Link href="https://www.starbucks.com/">Coffees</Nav.Link>
           <EmojiFoodBeverageIcon/><Nav.Link href="https://www.swiggy.com/restaurants/tea-time-kamarajar-road-lakshmipuram-coimbatore-423172">Tea</Nav.Link>
          <TapasIcon/><Nav.Link href="https://www.swiggy.com/restaurants/chaat-square-sweets-and-snacks-linge-gounder-street-vadavalli-coimbatore-457601">Snacks</Nav.Link>
          <CakeIcon/><Nav.Link href="https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-brookefields-mall-rs-puram-coimbatore-72832">Milkshakes and Desserts</Nav.Link>
          
          
          </Nav>
        </Container>
      </Navbar>      
    </div>   
  )
}

export default Web