import { useContext, useEffect, useMemo, useState } from "react";

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
        // 1. Single Movie Fetch Case
        if (!fetchCount) {
          const response = await fetch(`https://www.omdbapi.com/?i=${fetchTerm}&apikey=${apiKey}`);
          if (!response.ok) throw new Error(`Network response error: ${response.status}`);

          const data = await response.json();

          if (data?.Response === "False") {
            throw new Error(data?.Error || "Failed to fetch movie details.");
          }

          if (isMounted) {
            setFetchData(data);
          }
        }
        // 2. Multi-Page Search Case
        else {
          for (let i = 1; i <= fetchCount; i++) {
            const response = await fetch(
              `https://www.omdbapi.com/?s=${currentFilter}&page=${i}&apikey=${apiKey}`,
            );
            if (!response.ok) throw new Error(`Network response error: ${response.status}`);

            const data = await response.json();

            if (data?.Response === "False") {
              // Throwing an error automatically breaks the loop and goes straight to the catch block
              throw new Error(data?.Error || "Failed to fetch movie list.");
            } else if (data?.Search) {
              localAccumulator.push(...data.Search);
            }
          }

          if (isMounted) {
            setFetchData(localAccumulator);
          }
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message || "An unknown error occurred.");
          setFetchData(null); // Clear previous data on error
        }
      } finally {
        // The finally block ALWAYS runs, ensuring your loading spinner stops safely
        if (isMounted) {
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
