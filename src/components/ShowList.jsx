import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ShowList = () => {
	const [tvShowList, setTvShowList] = useState([])

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}shows?sort=rating`)
			const json = await response.json()//.slice(0, 4)
			const tvShow = json.slice(0, 4)

			console.log(tvShow)

			setTvShowList(tvShow)
		}

		getData()
	}, [])

	return (
		<>
			<Container className="show-list">
				<Row>
				{tvShowList.map(item => 
					<Col className='col-12 col-sm-6 col-lg-3 d-grid' key={item.id}>
						<img src={item.image.medium} className="d-block mx-lg-auto img-fluid" alt={item.name} loading="lazy" />
					</Col>
				)}
				</Row>
			</Container>
		</>
	)
}

export default ShowList