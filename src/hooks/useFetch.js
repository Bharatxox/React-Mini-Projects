import React, { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const resp = await fetch(url);
      const val = await resp.json();
      setData(val);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData, trigger]);

  const refetch = () => setTrigger((prev) => prev + 1);

  return [data, refetch];
};

export default useFetch;
