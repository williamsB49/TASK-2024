import { useState, useEffect } from "react";

const useGetValues = (key) => {
  const [state, setState] = useState(() => {
    const initalValue = localStorage.getItem(key);
    return JSON.parse(initalValue) || null;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  const updateState = (newValue) => {
    return setState(newValue);
  };

  return [state, updateState];
};

export default useGetValues;
