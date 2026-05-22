import { useEffect, useState } from "react";

const useFetchLocalStorage = (localStorageKey) => {
  const [localData, setLocalData] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  //Updating LocalStorage when 'localData' changes
  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(localData));
  }, [localData]);

  return [localData, setLocalData];
};

export default useFetchLocalStorage;
