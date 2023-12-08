import React from 'react';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function request<TResponse extends object>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  const response = await fetch(url, config);
  return await response.json();
}

export const useApi = <T extends object>(url: string, config: RequestInit = {}) => {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await request<T>(BASE_URL + url, config);
      setData(result);
      setError(null);
    } catch (error) {
      setError(error as Error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
