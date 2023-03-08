import { Link } from "react-router-dom";

const Header = () => {
  const setMode = () => {
    const BODY = document.body;
    BODY.classList.contains("dark")
      ? BODY.classList.remove("dark")
      : BODY.classList.add("dark");
  };
  return (
    <header className="w-full bg-DM_Txt_LM_Elements shadow-lg dark:bg-DM_Elements">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 xs:flex-row">
        <h1 className="text-xl font-bold tracking-wider">
          <Link to="/">Where in the world?</Link>
        </h1>
        <button
          onClick={setMode}
          className="block cursor-pointer rounded py-1 px-4 font-bold capitalize shadow-lg dark:hidden"
        >
          🌙 dark mode
        </button>
        <button
          onClick={setMode}
          className="hidden cursor-pointer rounded py-1 px-4 font-bold capitalize shadow-lg dark:block"
        >
          ⛅ light mode
        </button>
      </div>
    </header>
  );
};

export default Header;
