import Container from 'react-bootstrap/Container'
import MenuBar from './components/MenuBar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <MenuBar />
      <HeroSection />
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
