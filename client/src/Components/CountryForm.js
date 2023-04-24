function CountryForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
        <input 
            type = "text"
            name = "country"
            placeholder = "Enter a Country"
            value={props.value}
            onChange={props.onChange}
        />
        <button>Submit</button>
    </form>
  );
}

export default CountryForm