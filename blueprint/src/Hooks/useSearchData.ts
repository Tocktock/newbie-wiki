import useSWR from "swr";
import useDebounce from "./useDebounce";

const useSearchData = (query: string | undefined) => {
  console.log(`useSearch : ${query}`);
  const { data, error } = useSWR(
    !query ? null : `http://localhost:9090/api/v1/documents/search/${query}`,
    elasticFetcher
  );

  return {
    result: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const elasticFetcher = (url: string) => fetch(url).then((r) => r.json());

export default useSearchData;
