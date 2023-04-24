import { Form, Button } from 'react-bootstrap';

function CountryForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
        <input 
            type = "text"
            name = "country"
            placeholder = "Enter a Country"
            value={props.value}
            onChange={props.onChange}
        />
        <Button type='submit'>Submit</Button>
    </Form>
  );
}

export default CountryForm