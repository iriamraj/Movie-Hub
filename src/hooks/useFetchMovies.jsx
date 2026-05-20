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

function useFetchMovies(filterSelected, fetchCount) {
  const [fetchData, setFetchData] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const localAccumulator = [];

    let currentFilter = filterSelected;
    if (filterSelected === "Random") {
      const randomNumber = Math.floor(Math.random() * randomKeyword.length);
      currentFilter = randomKeyword[randomNumber];
    }

    async function fetchAllPages() {
      setFetchLoading(true);
      setFetchError(null);

      try {
        for (let i = 1; i <= fetchCount; i++) {
          if (!isMounted) return;

          const response = await fetch(
            `https://www.omdbapi.com/?s=${currentFilter}&page=${i}&apikey=${apiKey}`,
          );
          const data = await response.json();

          if (data?.Response === "False") {
            if (isMounted) setFetchError(data?.Error);
            break;
          } else if (data?.Search) {
            localAccumulator.push(...data.Search);
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
  }, [filterSelected, fetchCount]);

  return [fetchData, fetchLoading, fetchError];
}

export default useFetchMovies;
