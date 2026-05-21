import { useContext, useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;
const randomKeyword = [
  "Love",
  "Thriller",
  "Action",
  "Sci-Fi",
  "Drama",
  "Mystery",
  "Rom-Com",
  "Horror",
  "Fantasy",
  "Comedy",
  "Western",
  "Crime",
  "Adventure",
  "Biopic",
  "Musical",
  "Slasher",
  "Noir",
  "Satire",
  "Parody",
  "Epic",
];

function useFetchMovies(fetchTerm, fetchCount) {
  const [fetchData, setFetchData] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const localAccumulator = [];

    let currentFilter = fetchTerm;
    if (fetchTerm === "Random") {
      const randomNumber = Math.floor(Math.random() * randomKeyword.length);
      currentFilter = randomKeyword[randomNumber];
    }

    async function fetchAllPages() {
      setFetchLoading(true);
      setFetchError(null);

      try {
        if (!isMounted) return;

        //If 'fetchCount' is empty then fetch single movie using movie id
        if (!fetchCount) {
          const response = await fetch(`https://www.omdbapi.com/?i=${fetchTerm}&apikey=${apiKey}`);
          const data = await response.json();
          isMounted && setFetchData(data);
          setFetchLoading(false);

          return;
        } else {
          for (let i = 1; i <= fetchCount; i++) {
            const response = await fetch(
              `https://www.omdbapi.com/?s=${currentFilter}&page=${i}&apikey=${apiKey}`,
            );
            const data = await response.json();

            if (data?.Response === "False") {
              if (isMounted) setFetchError(data?.Error);
              break;
            } else if (data?.Search) {
              //Marge all data in a single Array
              localAccumulator.push(...data.Search);
            }
          }
        }

        if (isMounted) {
          setFetchData(localAccumulator);
          setFetchLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message || error);
          setFetchLoading(false);
        }
      }
    }

    fetchAllPages();

    return () => {
      isMounted = false;
    };
  }, [fetchTerm, fetchCount]);

  return [fetchData, fetchLoading, fetchError];
}

export default useFetchMovies;
