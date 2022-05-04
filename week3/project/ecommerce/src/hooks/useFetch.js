import { useState } from 'react';

const useFetch = (url, onReceived) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const performFetch = () => {
    setError(false);
    setIsLoading(true);

    const callFetch = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        console.error(res);
        setError(true);
      }

      const jsonResult = await res.json();

      onReceived(jsonResult);

      setIsLoading(false);
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