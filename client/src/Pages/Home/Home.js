import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Container, 
  Row, 
  Col, 
} from 'react-bootstrap'
import '../Home/Home.css'
import CountryForm from '../../Components/CountryForm/CountryForm';
import RegionDropdown from '../../Components/RegionDropdown/RegionDropdown';
import { getCountryInfo } from '../../Services/countryService';


function Home() {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const countryInfo = await getCountryInfo(country);
      navigate(`/countries/${country}`, { state: { countryInfo } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Container fluid >
      <Row className='header-row'>
        <Col>
          <h2 className="text-center mb-4">Get information on a country!</h2>
        </Col>
      </Row>
      <Row className='search-row'>
        <Col md={6}>
          <CountryForm value={country} onChange={handleChange} onSubmit={handleSubmit} />
          <RegionDropdown />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
