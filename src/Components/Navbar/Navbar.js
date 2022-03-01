import React from "react"
import { Navbar,Container,Form,FormControl} from "react-bootstrap"


const NavBarr = ({ inputSearch, setInputSearch }) => {
return (

<header>
<Navbar  bg="dark" variant="dark">
    <Container fluid> 
        <Navbar.Brand href="#home">
        <img
            alt=""
            src="https://static.vecteezy.com/ti/vecteur-libre/t1/2638614-m-alphabet-letter-logo-icon-en-noir-et-blanc-couleur-entreprise-et-entreprise-design-avec-carre-et-point-rouge-modele-d-identite-d-entreprise-creative-vectoriel.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '} 
        ovie Time
        </Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value = { inputSearch }
        onChange = {(e) => setInputSearch(e.target.value)}
        />
        
      </Form>
    
  </Container>
</Navbar>
    </header>
)
}  

export default NavBarr