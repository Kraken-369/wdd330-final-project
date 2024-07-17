import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const MenuBar = () => {
	return (
		<>
			<Navbar className='bg-body-tertiary'>
        <Container className='container-fluid'>
          <Navbar.Brand href="#home">
            <img
              src="/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
              alt="Tv Show .:: Finally ::."
            />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className='me-auto'>
              <Nav.Link href='#'>Home</Nav.Link>
              <Nav.Link href='#'>Search</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
		</>
  )
}

export default MenuBar