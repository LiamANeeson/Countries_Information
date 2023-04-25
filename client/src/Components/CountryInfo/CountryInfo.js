function CountryInfo(props) {
  const countryInfo = props.countryInfo;

  if (!countryInfo) {
    return <div>Loading country information...</div>;
  }

  return (
    <div>
        <h2>{countryInfo.name.common}</h2>
        <span alt={`${countryInfo.name.common} Flag`}>{countryInfo.flag}</span>
        <ul>
            <li>Official Name: {countryInfo.name.official}</li>
            <li>Population: {countryInfo.population}</li>
            <li>Capital: {countryInfo.capital[0]}</li>
            <li>Region: {countryInfo.region}</li>
            <li>Currency: {countryInfo.currencies.EUR.name}</li>
            <li>Currency Symbol: {countryInfo.currencies.EUR.symbol}</li>
            <li>Languages: {countryInfo.languages.eng}, {countryInfo.languages.gle}</li>
            <li>Car Sign: {countryInfo.car.signs}</li>
            <li>Side of the Road they drive on: {countryInfo.car.side}</li>
            <li>Timezone: {countryInfo.timezones}</li>
            <li>Google Maps: {countryInfo.maps.googleMaps}</li>
        </ul>
    </div>
  );
}

export default CountryInfo;
