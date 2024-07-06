import { useEffect, useState } from "react";
import axios from "axios";

function useGetMovieList(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const Response = await axios.get(url);
        // console.log(Response.data);
        // console.log(Response.status);
        // console.log(Response.config);
        setData(Response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getData()
  }, []);

  return {data, loading};
}

export {useGetMovieList}
