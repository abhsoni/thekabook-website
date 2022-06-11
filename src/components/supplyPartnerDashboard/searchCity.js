import { useState } from "react";
import { fetchPlace } from "./fetchPlace";
import CitiesData from "./in.json";

function SearchCity(props) {
  const { selectedCity, setSelectedCity } = props;
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    setSelectedCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };
  // const data = ["jaipur", "mumbai", "kolkata"];

  return (
    <section
      className="container"
      style={{ padding: "0px", marginBottom: "20px" }}
    >
      <form>
        <div className="row">
          <div className="col">
            <label
              style={{ paddingLeft: "12px", paddingRight: "20px" }}
              className="description"
            >
              Select city
              {/* {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )} */}
            </label>
            <input
              list="places"
              type="text"
              id="city"
              name="city"
              onChange={handleCityChange}
              value={selectedCity}
              required
              pattern={autocompleteCities.join("|")}
              autoComplete="off"
              style={{ borderRadius: "2px" }}
            />
            <datalist id="places">
              {CitiesData.map((city, i) => (
                <option key={i}>{city.city}</option>
              ))}
            </datalist>
            {/* <span className="placesAutocomplete__hint">
            *start typing and choose your city from the given options
          </span> */}
            {/* <button type="submit">Select City</button> */}
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchCity;
