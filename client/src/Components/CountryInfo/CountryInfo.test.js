import React from 'react';
import { render } from '@testing-library/react';
import CountryInfo from '../CountryInfo/CountryInfo';

const mockCountryInfo = {
    flag: '🇮🇪',
    name: {
      common: 'Ireland',
      official: 'Republic of Ireland',
      nativeName: {
        eng: {
          official: 'Republic of Ireland',
          common: 'Ireland',
        },
        gle: {
            official: 'Poblack na hÉireann',
            common: 'Éire'
        }
      },
    },
    flags: {
      svg: 'https://flagcdn.com/ie.svg',
    },
    population: 4977400,
    capital: ['Dublin'],
    region: 'Europe',
    currencies: {
      USD: {
        name: 'Euro',
        symbol: '€',
      },
    },
    languages: {
      eng: 'English',
      gle: 'Irish',
    },
    unMember: true,
    car: {
      signs: 'IRL',
      side: 'left',
    },
    timezones: ['UTC'],
    maps: {
      googleMaps: 'https://goo.gl/maps/BcA4Npzh32JbY1Gp6',
    },
  };

describe('CountryInfo', () => {
  it('renders country information correctly', () => {
    const { getByText, getByAltText } = render(<CountryInfo countryInfo={mockCountryInfo} />);

    expect(getByText('Ireland')).toBeInTheDocument();
    expect(getByText('Republic of Ireland')).toBeInTheDocument();
    expect(getByText('Population:').closest('tr').lastChild).toHaveTextContent('4,977,400');
    expect(getByText('Capital:').closest('tr').lastChild).toHaveTextContent('Dublin');
    expect(getByText('Currency:').closest('tr').lastChild).toHaveTextContent('Euro');
    expect(getByText('Currency Symbol:').closest('tr').lastChild).toHaveTextContent('€');
    expect(getByText('Languages:').closest('tr').lastChild).toHaveTextContent('English, Irish');
    expect(getByText('Is UN Member:').closest('tr').lastChild).toHaveTextContent('Yes');
    expect(getByText('Car Sign:').closest('tr').lastChild).toHaveTextContent('IRL');
    expect(getByText('Side of road driven on:').closest('tr').lastChild).toHaveTextContent('Left');
    expect(getByText('Timezone:').closest('tr').lastChild).toHaveTextContent('UTC');
    expect(getByText('Google Maps:').closest('tr').lastChild).toHaveTextContent('https://goo.gl/maps/BcA4Npzh32JbY1Gp6');
    expect(getByAltText('Ireland Flag')).toBeInTheDocument();
  });
  
  it('displays loading message when countryInfo is null', () => {
    const { getByText } = render(<CountryInfo />);
    
    expect(getByText('Loading country information...')).toBeInTheDocument();
  });
});
