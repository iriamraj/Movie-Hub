import { useEffect, useState } from "react";

const useFetchLocalStorage = (localStorageKey) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localData, setLocalData] = useState(loadLocalData);

  function loadLocalData() {
    let data = null;
    try {
      setLoading(true);
      data = JSON.parse(localStorage.getItem(localStorageKey));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    return data || [];
  }

  //Updating LocalStorage when 'localData' changes
  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(localData));
  }, [localData]);

  return [[localData, setLocalData], loading, error];
};

export default useFetchLocalStorage;
