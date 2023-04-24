import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './CountryForm.css';

function CountryForm(props) {
  return (
    <Container className="country-form-container">
      <Form onSubmit={props.onSubmit}>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="input-container">
              <input 
                type="text"
                name="country"
                placeholder="Enter a Country"
                value={props.value}
                onChange={props.onChange}
                className="country-input"
              />
              <Button variant="primary" type="submit" className="country-submit">
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default CountryForm;
