import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryInfoRegion } from '../../Services/countryService';

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
    <div>
      <h2>Countries in {region}</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default Country;
