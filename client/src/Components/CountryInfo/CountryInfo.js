import {
  Container,
  Image,
  Table,
} from 'react-bootstrap'

function CountryInfo(props) {
  const countryInfo = props.countryInfo;

  if (!countryInfo) {
    return <div>Loading country information...</div>;
  }
  
  const nativeNamesArray = Object.keys(countryInfo.name.nativeName).map(key => countryInfo.name.nativeName[key].common);
  let nativeNames = nativeNamesArray.join(', ');

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="text-center">{countryInfo.flag} {countryInfo.name.common} {countryInfo.flag}</h1>
        <Image src={countryInfo.flags.svg}  width="300" height="200" alt={`${countryInfo.name.common} Flag`} />
        <Table striped bordered hover style={{ marginTop: '30px', marginBottom: '30px' }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Official Name: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.name.official}</td>
            </tr><tr>
              <td style={{ fontWeight: 'bold' }}>Native Names: </td>
              <td style={{ textAlign: 'right' }}>{nativeNames}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Population: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.population.toLocaleString()}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Capital: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.capital[0]}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Region: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.region}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Currency: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.currencies[Object.keys(countryInfo.currencies)[0]].name}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Currency Symbol: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.currencies[Object.keys(countryInfo.currencies)[0]].symbol}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Languages: </td>
              <td style={{ textAlign: 'right' }}>{Object.values(countryInfo.languages).join(', ')}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Is UN Member: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.unMember ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Car Sign: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.car.signs}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Side of road driven on: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.car.side.charAt(0).toUpperCase() + countryInfo.car.side.slice(1)}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Timezone: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.timezones}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Google Maps: </td>
              <td style={{ textAlign: 'right' }}>{countryInfo.maps.googleMaps}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default CountryInfo;
