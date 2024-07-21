import Container from 'react-bootstrap/Container'
import MenuBar from './components/MenuBar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeroSection from './components/HeroSection'
import ShowList from './components/ShowList'

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
      <ShowList />
    </>
  )
}

export default App
