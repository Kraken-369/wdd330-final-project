import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
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
      <Container className="col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-4">
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/487/1217811.jpg" className="d-block mx-lg-auto img-fluid" alt="Andor" width="430" loading="lazy" />
          </div>
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Row>
          <Col className='d-grid'>
            <Button variant="primary">
              Action <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Col>
          <Col className='d-grid'>
            <Button variant="primary">
              Comedy <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Col>
          <Col className='d-grid'>  
            <Button variant="primary">
              Sci-Fi <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className='show-list'>
        <Row>
          <Col className='col-12 col-sm-6 col-lg-3 d-grid'>
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/487/1217811.jpg" className="d-block mx-lg-auto img-fluid" alt="Andor" loading="lazy" />
          </Col>
          <Col className='col-12 col-sm-6 col-lg-3 d-grid'>
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/487/1217811.jpg" className="d-block mx-lg-auto img-fluid" alt="Andor" loading="lazy" />
          </Col>
          <Col className='col-12 col-sm-6 col-lg-3 d-grid'>
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/487/1217811.jpg" className="d-block mx-lg-auto img-fluid" alt="Andor" loading="lazy" />
          </Col>
          <Col className='col-12 col-sm-6 col-lg-3 d-grid'>
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/487/1217811.jpg" className="d-block mx-lg-auto img-fluid" alt="Andor" loading="lazy" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
