import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../contexts/Context';
export default function FilterStore() {
  const { Wines } = useContext(MyContext);

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [countryFilter, setCountryFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const renderFilters = () => {
    let countries = Wines.map((wine) => wine.country);
    let nonRepeated = [...new Set(countries)];
    setCountries(nonRepeated);
    let prices = Wines.map((wine) => wine.price);
    const max = prices.reduce((a, b) => Math.max(a, b), -Infinity);
    setMaxPrice(max);
    const min = prices.reduce((a, b) => Math.min(a, b), Infinity);
    setMinPrice(min);
  };

  useEffect(() => {
    renderFilters();
  }, [Wines]);

  const getValue = ({ target }) => {
    setCountryFilter(target.value);
    console.log(countryFilter);
  };
  function mapFilter() {
    return countries.map((country, i) => (
      <label key={i} htmlFor={country}>
        <input onChange={getValue} key={country} type="radio" value={country} name="countries" />
        {country}
      </label>
    ));
  }
  return (
    <div>
      {' '}
      <form>
        <div name="countries">{mapFilter()}</div>
        <input
          key="minimo"
          type="number"
          value={minPrice}
          onChange={({ target }) => setMinPrice(target.value)}
        />
        <input
          key="maximo"
          type="number"
          value={maxPrice}
          onChange={({ target }) => setMaxPrice(target.value)}
        />
      </form>
    </div>
  );
}
