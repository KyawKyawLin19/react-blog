import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(res => {
            if(!res.ok) {
              throw Error('Could not fetch the data for that resource')
            }
            return res.json()
          })
          .then((data) => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
          })
          .catch((e) => {
            setIsPending(false);
            setError(e.message);
          })
        }, 1000);
      }, [url]);

    return { data, isPending, error };
    
}

export default useFetch;