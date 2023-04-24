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
            <li>Population: {countryInfo.population}</li>
            <li>Capital: {countryInfo.capital[0]}</li>
            <li>Region: {countryInfo.region}</li>
        </ul>
    </div>
  );
}

export default CountryInfo;
