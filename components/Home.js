import { useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSith } from '@fortawesome/free-brands-svg-icons';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { searchAPI } from '../functions/searchAPI';
import Card from '../components/Card';
import Form from '../components/Form';

function Home() {
  const { theme, setTheme } = useTheme();
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (searchText) => {
    const result = await searchAPI(searchText);
    setSearchResult(result);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const cards = searchResult.map((data, i) => {
    return <Card key={i} infos={data} />;
  });

  return (
    <div id="main" className="py-0 px-5 bg-left-top bg-right-top dark:bg-left-bottom bg-no-repeat bg-cover w-screen min-h-screen relative bg-light dark:bg-dark flex flex-col justify-center items-center transition-all">
      {/* TOGGLE THEME BUTTON */}
      <div onClick={() => toggleTheme()} className="rounded-full cursor-pointer border-none absolute top-6 right-6 w-[50px] h-[50px] bg-neutral-500 dark:bg-neutral-700">
        <button className="flex justify-center items-center w-full h-full rounded-full -translate-y-[6px] active:-translate-y-[2px] bg-neutral-800 dark:bg-neutral-200">
          {theme === 'light'
            ? <FontAwesomeIcon icon={faSith} className="text-2xl text-neutral-200 dark:text-neutral-800" />
            : <FontAwesomeIcon icon={faJedi} className="text-2xl text-neutral-200 dark:text-neutral-800" />}
        </button>
      </div>

      {/* TITLE */}
      <h1 className="font-star-jedi text-6xl m-10 text-neutral-800 dark:text-neutral-200">THEME WARS</h1>

      {/* SEARCH */}
      <Form handleSearch={handleSearch} />

      {/* CARDS */}
      <div className="w-2/5 flex flex-col items-center">
        {cards}
      </div>
    </div>
  );
}

export default Home;
