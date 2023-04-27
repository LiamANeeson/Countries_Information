# Countries information app 
This application retrieves information from the [REST Countries API](https://restcountries.com/) 

Application is built using React and Node/Express
Application has been deployed via heroku [VIEW HERE](https://countries-information.herokuapp.com/)

## To Run Locally
1. Clone the repository
2. Split into two seperate terminals
3. In one terminal `cd client` and run `npm i`
4. In second terminal remain in the root directory and run `npm i`
5. You will need to create a `.env` in the root directroy. A `.envexample` file was added so you can copy this code to the `.env` file created. OR do this to make a copy `cp .envexample .env` 
6. then run `npm start` in both terminal windows

## Run tests
- To Run the tests that were created type `npm test` into the root directory.

# Code Explanation
## Server 
### Controllers
The Controllers folder contains the route handlers, which are responsible for handling requests and generating responses for specific routes in the application.

Within the Controllers folder I created a `countryController.js` file which contains the following functions: 

`getCountryInfo`: Is a route handler that handles GET request to a route with paramter "name". It uses the `name` param to call the `getCountryInfo` function from the `countryService.js` file. It sends the data back to the client as JSON. 

`getCountryInfoRegion`: Is a route handler that handles GET request to a route with parameter "currency". It uses `Region` param to call the `getCountryInfoRegion` function from the `countryService.js` file. It sends the data back to the client as JSON. 

`getCountryInfoLanguage` `getCountryInfoCurrency` work in the same was as `getCountryInfoRegion` however did not get fully implemented within the frontend of the application. 

### Routes
Contains the route definitions for the app.
`/currency/:currency`: A get request where ":currency" is parameter used to identify currency of a country.
`/language/:language`: A get request where ":language" is parameter used to identify language of a country.
`/region/:region`: A get request where ":region" is parameter used to identify region of a country.
`/:name`:  A get request where ":name" is parameter used to identify name of a country.

### Services
The Services folder contains external API integrations that the Controllers may need to execute to complete a request. In this case the REST Countries API. 

`getCountryInfo(name)`: Retrieves country information based on the country name passed as an argument.

`getCountryInfoRegion(region)`: Retrieves country information based on the region passed as an argument.

`getCountryInfoCurrency(language)`: Retrieves country information based on the language code passed as an argument. This didn't get implemented into the frontend but the server endpoint works. Not implemented in frontend.

`getCountryInfoCurrency(currency)`: Retrieves country information based on the currency code passed as an argument. This didn't get implemented into the frontend but the server endpoint works. Not implemented in frontend.

### Utils
For utility functions:
`errorHandler`: Sends a HTTP 500 response with the error message as JSON. 

## Client
### Components Folder
Used to store reusubale UI components. Makes it easy to seperate code and for reusability. 

`CountryForm` Component
Form that accepts user input for a country name and submits form when button is clicked. 

`CountryInfo` Component
Displays Country information. 

`RegionDropdown` Component
Displays a dropdown menu with region options and allows the user to select a region

### Pages
Pages in the app. Navigation done with `react-router-dom`

`Country.js` Page:
Fetches and displays info about a single country. Uses `useParams` to extract the name from the URL. Sends an async request to `getCountryInfo` from the `countryService.js` file located in the `Services` folder. When the data is recieved updates the state with `setCountryInfo`.

`CountryList.js` Page: 
Displays a table of countires within a specified region. Imports the `getCountryInfoRegion` from the `CountryService.js` file. 
Takes `region` parameter from the URL and uses it to fetch countries within that region. Data is rendered using `map()` and each row o the table is a link to the specific country page. 

`Home.js` Page:
Displays the homepage with a search bar and a dropdown menu to retrieve information on countries. 

### Services folder
The services folder is used to interact with the external API to fetch data related to the countries. Services folder makes it easy to manage and maintain any of the API related code. 

`getCountryInfo(name)`: Async function that fetches data on specific country by name. 
`getCountryInfo(Region)`: Async function that fetches a list of countries in a specific region. 

