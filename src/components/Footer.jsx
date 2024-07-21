import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer className="border-top">
        <Container className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p className="col-md-4 mb-0 text-body-secondary">© 2024 Nestor Otondo .: Tv Show :: Finally :.</p>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img
              src="/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
              alt="Tv Show .:: Finally ::."
            />
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Search</a></li>
          </ul>
        </Container>
      </footer>
    </>
  )
}

export default Footer