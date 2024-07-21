import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"

const HeroSection = () => {
	const [hero, setHero] = useState([])

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}search/shows?q=${import.meta.env.VITE_FEATURE_TITLE}`)
			const json = await response.json()

			setHero(json)
		}

		getData()
	}, [])

	return (
		<>
			<Container className="col-xxl-8 px-4 py-5">
				{hero.map(item => <div key={item.show.id} className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-4">
						<img src={item.show.image.original} className="d-block mx-lg-auto img-fluid" alt={item.show.name} width="430" loading="lazy" />
					</div>
					<div className="col-lg-8">
						<h1 className="display-5 fw-bold lh-1 mb-3">{item.show.name}</h1>
						<div className="lead">
							<div dangerouslySetInnerHTML={{ __html: item.show.summary }} />
						</div>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
							<button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
						</div>
					</div>
				</div>
				)}
			</Container>
		</>
	)
}

export default HeroSection