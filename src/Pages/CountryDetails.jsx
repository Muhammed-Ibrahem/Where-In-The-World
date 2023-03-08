import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useCountry } from "../Store/ZustandStore";
const CountryDetails = () => {
  const getOneCountry = useCountry((state) => state.getOneCountry);
  const oneCountry = useCountry((state) => state.oneCountry);
  const [isLoading, setIsLoading] = useState(true);
  const formatter = new Intl.NumberFormat("en-US");
  const { name } = useParams();

  useEffect(() => {
    const callTheApi = async () => {
      await getOneCountry(name);
      setIsLoading(false);
    };
    callTheApi();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <main className="container mx-auto flex min-h-[calc(100vh-56px)] flex-col items-center gap-8 p-4 lg:flex-row lg:gap-32">
          <div className="shrink-0 lg:w-1/3 ">
            <Link
              className="block w-fit rounded bg-DM_Txt_LM_Elements py-2 px-6 shadow-lg dark:bg-DM_Elements"
              to="/"
            >
              Back
            </Link>
            <img
              className="mt-8 border border-DM_Elements/20 dark:border-none"
              src={oneCountry.flag}
              alt={oneCountry.alt}
            />
          </div>

          <div>
            <strong className="mb-4 block text-2xl">{oneCountry.name}</strong>

            <div className="flex gap-16">
              <div className="space-y-2">
                <p className="font-semibold">
                  Native Name:{" "}
                  <span className="font-normal dark:opacity-50">
                    {oneCountry.nativeName}
                  </span>
                </p>
                <p className="font-semibold">
                  Population:{" "}
                  <span className="font-normal dark:opacity-50">
                    {formatter.format(oneCountry.population)}
                  </span>
                </p>
                <p className="font-semibold">
                  Region:{" "}
                  <span className="font-normal dark:opacity-50">
                    {oneCountry.region}
                  </span>
                </p>
                <p className="font-semibold">
                  Capital:{" "}
                  <span className="font-normal dark:opacity-50">
                    {oneCountry.capital.join(", ")}
                  </span>
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold">
                  Top Level Domain:{" "}
                  <span className="font-normal dark:opacity-50">
                    {oneCountry.tld.join(", ")}
                  </span>
                </p>
                <p className="font-semibold">
                  Currencies:{" "}
                  <span className="font-normal dark:opacity-50">
                    {oneCountry.curr.join(", ")}
                  </span>
                </p>
                <p className="font-semibold">
                  Languages:{" "}
                  <span className="font-normal dark:opacity-50">
                    {oneCountry.languages.join(", ")}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-2 font-semibold">
              Border Countries:{" "}
              {Array.isArray(oneCountry?.borders) ? (
                oneCountry.borders.map((e, i) => {
                  return (
                    <span
                      className="flex items-center justify-center rounded bg-DM_Txt_LM_Elements py-1 px-4 font-normal shadow-lg dark:bg-DM_Elements"
                      key={i}
                    >
                      {e}
                    </span>
                  );
                })
              ) : (
                <span className="bg-DM_Text_LM_Elements rounded py-1 px-4 font-normal shadow-lg dark:bg-DM_Elements">
                  This country has no borders.
                </span>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default CountryDetails;
