import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCountryInfoRegion } from '../../Services/countryService';
import { Container, Table } from 'react-bootstrap';
import "../CountryList/CountryList.css"

function Country() {
  const { region } = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountryInfoRegion(region);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [region]);

  return (
    <Container className="text-center">
      <h2 className="my-4">Countries in {region}</h2>
      <Table bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Language</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.name.common}>
              <td>{country.flag}</td>
              <td><Link to={`/countries/${country.name.common}`}>{country.name.common}</Link></td>
              <td>{country.capital ? country.capital[0] : 'N/A'}</td>
              <td>{country.population}</td>
              <td>{Object.values(country.languages).join(', ')}</td>
              <td>{country.currencies[Object.keys(country.currencies)[0]].name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Country;
