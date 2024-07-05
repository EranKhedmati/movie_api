import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [movieList, setMovieList] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieList(data.data);
        setMetaData(data.metadata);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return [movieList, metaData, isLoading];
}
