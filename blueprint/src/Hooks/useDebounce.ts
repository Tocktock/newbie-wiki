import { useEffect, useState } from "react";

const useDebounce = (value: string | undefined, delay: number) => {
  const [result, setResult] = useState<string | undefined>();

  useEffect(() => {
    const timerID = setTimeout(() => {
      setResult(value);
      console.log(`useDEbounce : ${value}`);
    }, delay);
    return () => clearTimeout(timerID);
  }, [value]);

  return result;
};

export default useDebounce;
