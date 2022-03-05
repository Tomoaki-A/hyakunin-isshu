import { useEffect, useState } from "react";

export const useFetchKaruta = () => {
  const [karuta, setKaruta] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://api.aoikujira.com/hyakunin/get2.php?fmt=json"
      );
      const data = await res.json();
      setKaruta(data);
    };
    fetchData();
  }, []);

  return {
    karuta,
    isLoading: karuta ? false : true,
  };
};
