import { create } from "zustand";
import {
  fetchData,
  prepareData,
  prepareOneCountryData,
} from "../Helpers/Functions";
export const useCountry = create((set) => ({
  Countries: [],
  oneCountry: {},
  searchTerm: "",
  region: "",
  isLoading: false,
  listOfShowedCountries: 8,

  setRegionFilter: (reg) => set(() => ({ region: reg })),
  setSearchTerm: (term) => set(() => ({ searchTerm: term.toLowerCase() })),
  setListOfCounries: (add = 8) =>
    set((state) => ({
      listOfShowedCountries: state.listOfShowedCountries + add,
    })),

  getCountries: async () => {
    set(() => ({ isLoading: true }));
    let res;
    let dataAfterBeingPrepared = [];
    try {
      res = await fetchData(`https://restcountries.com/v3.1/all`);
      dataAfterBeingPrepared = await prepareData(res.data);
    } catch (err) {
      console.log(err.message);
    }
    set(() => ({
      Countries: dataAfterBeingPrepared,
      isLoading: false,
    }));
  },
  getOneCountry: async (countryName) => {
    let res;
    let oneCountryData;
    try {
      res = await fetchData(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      oneCountryData = prepareOneCountryData(res.data);
    } catch (err) {
      console.log(err.message);
    }
    set(() => ({ oneCountry: oneCountryData, searchTerm: "" }));
  },
}));
