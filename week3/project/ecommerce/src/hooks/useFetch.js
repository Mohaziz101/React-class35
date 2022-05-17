import { useState } from 'react';

const useFetch = (onReceived) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const performFetch = (url) => {
    setError(false);
    setIsLoading(true);

    const callFetch = async () => {
      try {
        const res = await fetch(url);
  
        if (!res.ok) {
          console.error(res);
          setError(true);
        }
  
        const jsonResult = await res.json();
  
        onReceived(jsonResult);
  
        setIsLoading(false);
      } catch(err) {
        setError(true)
      }
    };

    try {
      callFetch();
    } catch (error) {
      console.error(error);
      setError(true);
      setIsLoading(false);
    }
  };

  return [isLoading, error, performFetch];
};

export default useFetch;