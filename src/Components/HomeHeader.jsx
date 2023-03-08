import { useState } from "react";
import { useCountry } from "../Store/ZustandStore";
const HomeHeader = () => {
  const setSearchTerm = useCountry((state) => state.setSearchTerm);
  const setRegionFilter = useCountry((state) => state.setRegionFilter);
  const region = useCountry((state) => state.region);
  const [isOpen, setIsOpen] = useState(false);
  const setRegion = (e) => {
    setRegionFilter(e.target.dataset.region);
  };
  const toggleFilterMenu = () => {
    setIsOpen((e) => !e);
  };

  return (
    <header className="mt-8 px-4 text-homeItems">
      <div className="container mx-auto flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex items-center overflow-hidden rounded shadow md:w-1/3">
          <span className="flex w-[50px] items-center justify-center bg-DM_Txt_LM_Elements py-2 dark:bg-DM_Elements">
            🔎
          </span>
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full  border-none py-2 outline-none dark:bg-DM_Elements"
            onClick={() => {
              setIsOpen(false);
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <div className="relative space-y-2">
          <div
            onClick={toggleFilterMenu}
            className="flex  cursor-pointer justify-between gap-4 rounded bg-DM_Txt_LM_Elements p-2 shadow dark:bg-DM_Elements md:w-[150px]"
          >
            <span>{region ? region : "Filter By Region"}</span>
            <span>🔻</span>
          </div>
          <ul
            className={`absolute w-full overflow-hidden  rounded bg-DM_Txt_LM_Elements px-2 shadow-lg transition-all dark:bg-DM_Elements ${
              isOpen ? "h-[174px]" : "h-0"
            }`}
          >
            <li
              data-region=""
              onClick={setRegion}
              className="cursor-pointer py-1 transition-all hover:px-2"
            >
              All
            </li>
            <li
              data-region="Africa"
              onClick={setRegion}
              className="cursor-pointer py-1 transition-all hover:px-2"
            >
              Africa
            </li>
            <li
              data-region="America"
              onClick={setRegion}
              className="cursor-pointer py-1 transition-all hover:px-2"
            >
              America
            </li>
            <li
              data-region="Asia"
              onClick={setRegion}
              className="cursor-pointer py-1 transition-all hover:px-2"
            >
              Asia
            </li>
            <li
              data-region="Europe"
              onClick={setRegion}
              className="cursor-pointer py-1 transition-all hover:px-2"
            >
              Europe
            </li>
            <li
              data-region="Oceania"
              onClick={setRegion}
              className="cursor-pointer py-1 transition-all hover:px-2"
            >
              Oceania
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
