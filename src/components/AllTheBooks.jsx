import { Card, Col, Row } from "react-bootstrap"
import fantasy from "../data/fantasy.json"

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map(book => {
        return (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" className="cardImg img-fluid" src={book.img} />
              <Card.Body className="bg-warning">
                <Card.Title>
                  <a className="cardTitle" href="#">
                    {book.title}
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks
