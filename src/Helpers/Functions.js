import { v4 } from "uuid";
export const fetchData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    return {
      error: "response failed",
    };
  }
  const data = await res.json();

  return {
    error: false,
    data,
  };
};
export const prepareData = (data) => {
  return data.map((e) => {
    return {
      id: v4(),
      flag: e.flags.png,
      alt: e.flags.alt,
      name: e.name.common,
      population: e.population,
      region: e.region,
      capital: e.capital,
    };
  });
};
export const prepareOneCountryData = (oneCountry) => {
  const e = oneCountry[0];
  const CountryObj = {
    flag: e.flags.svg,
    alt: e.flags.alt,
    name: e.name.common,
    nativeName: e.name.nativeName, // Object
    population: e.population,
    region: e.region,
    subRegion: e.subRegion,
    capital: e.capital, // Array
    tld: e.tld, // Array,
    curr: e.currencies, // Object
    languages: e.languages, // Object
    borders: e.borders, // Array || NULL
  };
  CountryObj.nativeName =
    CountryObj.nativeName[Object.keys(CountryObj.nativeName)[0]].official;
  CountryObj.curr = Object.keys(CountryObj.curr).map(
    (e) => CountryObj.curr[e].name
  );
  CountryObj.languages = Object.keys(CountryObj.languages).map(
    (e) => CountryObj.languages[e]
  );

  return CountryObj;
};
