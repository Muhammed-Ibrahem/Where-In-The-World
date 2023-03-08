import Country from "./Country";
import { useCountry } from "../Store/ZustandStore";
import Loader from "./Loader";
const Main = () => {
  const listOfShowedCountries = useCountry(
    (state) => state.listOfShowedCountries
  );
  const setListOfCounries = useCountry((state) => state.setListOfCounries);
  const Countries = useCountry((state) => state.Countries);
  const isLoading = useCountry((state) => state.isLoading);
  const searchTerm = useCountry((state) => state.searchTerm);
  const region = useCountry((state) => state.region);

  const addCountries = () => {
    if (listOfShowedCountries >= 250) return;
    setListOfCounries();
  };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <main className="mt-4 p-4">
          <div className="container mx-auto grid items-center gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Countries.filter((e) => e.region.includes(region))
              .filter((e) => e.name.toLowerCase().includes(searchTerm))
              .slice(0, listOfShowedCountries)
              .map((e) => {
                if (e.name === "Israel") return;
                return <Country key={e.id} {...e} />;
              })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={addCountries}
              className="rounded bg-DM_Txt_LM_Elements py-2 px-4 shadow-lg dark:bg-DM_Elements"
            >
              Show more
            </button>
            {listOfShowedCountries > 8 && (
              <>
                <button
                  onClick={() => {
                    setListOfCounries(-8);
                  }}
                  className="rounded bg-DM_Txt_LM_Elements py-2 px-4 shadow-lg dark:bg-DM_Elements"
                >
                  See less
                </button>
                <button
                  onClick={() => {
                    setListOfCounries((listOfShowedCountries - 8) * -1);
                  }}
                  className="rounded bg-DM_Txt_LM_Elements py-2 px-4 shadow-lg dark:bg-DM_Elements"
                >
                  Default
                </button>
              </>
            )}
            <button
              onClick={() => {
                setListOfCounries(250);
              }}
              className="rounded bg-DM_Txt_LM_Elements py-2 px-4 shadow-lg dark:bg-DM_Elements"
            >
              Show All
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export default Main;
