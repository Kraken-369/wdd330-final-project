import { useEffect, useState } from "react"
import { Badge, Button, Container, Col, Row } from "react-bootstrap"

const GenresSection = () => {
  const [filters, setFilter] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}shows`)
      const json = await response.json()
      const tvShowList = json.slice(0, 20)
      const filterByAction = tvShowList.filter(tvShow => tvShow.genres.includes('Action'))
      const filterByDrama = tvShowList.filter(tvShow => tvShow.genres.includes('Drama'))
      const filterBySciFi = tvShowList.filter(tvShow => tvShow.genres.includes('Science-Fiction'))
      const getFilters = []

      getFilters['action'] = filterByAction.length
      getFilters['drama'] = filterByDrama.length
      getFilters['scifi'] = filterBySciFi.length

      setFilter(getFilters)
    }
    
    getData()
  }, [])

  return (
    <>
    <Container>
        <Row>
          <Col className='d-grid'>
            <Button variant="primary">
              Action <Badge bg="secondary">{filters['action']}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Col>
          <Col className='d-grid'>
            <Button variant="primary">
              Comedy <Badge bg="secondary">{filters['drama']}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Col>
          <Col className='d-grid'>  
            <Button variant="primary">
              Sci-Fi <Badge bg="secondary">{filters['scifi']}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GenresSection