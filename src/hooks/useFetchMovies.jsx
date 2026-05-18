import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;
let tempFetchData = [];
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

  let filter = "";
  useEffect(() => {
    tempFetchData = [];
    const randomNumber = Math.round(Math.random() * 10);
    if (filterSelected === "Random") {
      filter = randomKeyword[randomNumber];
    } else {
      tempFetchData = [];
      filter = filterSelected;
    }

    if (tempFetchData.length === 0) {
      (async function fetchUrl() {
        try {
          for (let i = 1; i <= fetchCount; i++) {
            const response = await fetch(
              `https://www.omdbapi.com/?s=${filter}&page=${i}&apikey=${apiKey}`,
            );
            const data = await response.json();
            if (data?.Response === "False") {
              setFetchError(data?.Error);
            } else {
              data && tempFetchData.push(...data?.Search);
            }
          }
          tempFetchData && setFetchData(tempFetchData);
          setFetchLoading(false);
        } catch (error) {
          setFetchError(error);
          setFetchLoading(false);
        }
      })();
    } else {
      setFetchData(tempFetchData);
    }
  }, [filterSelected]);

  return [fetchData, fetchLoading, fetchError];
}

export default useFetchMovies;
