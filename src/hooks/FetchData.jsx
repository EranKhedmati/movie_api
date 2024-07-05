import { useEffect, useState } from "react";

export function useFetchData(url) {
    const [movieList, setMovieList] = useState([]);
    const [metaData, setMetaData] = useState([]);

    useEffect(()=>{
        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                setMovieList(data.data);
                setMetaData(data.metadata);
            })
            .catch(err => console.log(err))
    }, [])

    return [movieList, metaData];
}
