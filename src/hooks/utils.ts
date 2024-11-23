import { useState, useEffect } from "react";

function useRequest<RequestShape>(url: string): [boolean, RequestShape | null] {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<RequestShape | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [isLoading, data];
}

export { useRequest };
