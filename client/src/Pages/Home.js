import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CountryForm from '../Components/CountryForm';
import { getCountryInfo } from '../Services/countryService';

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
    <div>
      <h1>Get Information on a country!</h1>
      <CountryForm value={country} onChange={handleChange} onSubmit={handleSubmit}/>
    </div>
  )
}

export default Home;
