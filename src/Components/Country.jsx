import { Link } from "react-router-dom";

const Country = ({ flag, name, population, region, capital, alt }) => {
  const formatter = new Intl.NumberFormat("en-US");
  return (
    <div className="overflow-hidden rounded bg-DM_Txt_LM_Elements shadow-lg dark:bg-DM_Elements">
      <div className="aspect-video border border-DM_Elements/20 dark:border-none">
        <Link to={`/${name}`}>
          <img src={flag} alt={alt} className="aspect-video w-full" />
        </Link>
      </div>
      <div className="space-y-2 p-4">
        <strong className="block overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </strong>
        <p>
          Population:{" "}
          <span className="dark:text-DM_Txt_LM_Elements/50">
            {formatter.format(population)}
          </span>
        </p>
        <p>
          Region:{" "}
          <span className="dark:text-DM_Txt_LM_Elements/50">{region}</span>
        </p>
        <p>
          Capital:{" "}
          <span className="dark:text-DM_Txt_LM_Elements/50">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
