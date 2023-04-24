import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryInfo } from '../../Services/countryService'
import CountryInfo from '../../Components/CountryInfo/CountryInfo';

function Country() {
    const { name } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);
    
    useEffect(() => {
        if (!name) return;

        const fetchCountryInfo = async () => {
            try {
                const data = await getCountryInfo(name);
                setCountryInfo(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCountryInfo();
    }, [name]);
    
    return (
    <div>
        {countryInfo ? (
            <CountryInfo countryInfo={countryInfo} />
        ) : (
            <p>Loading info...</p>
        )}
    </div>
  )
}

export default Country