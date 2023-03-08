import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./Pages/CountryDetails";
import { useEffect } from "react";
import { useCountry } from "./Store/ZustandStore";

function App() {
  const getCountries = useCountry((state) => state.getCountries);
  useEffect(() => {
    const callTheApi = async () => {
      try {
        await getCountries();
      } catch (err) {
        console.log(err.message);
      }
    };
    callTheApi();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
