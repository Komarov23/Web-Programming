import {useEffect, useState} from "react";

const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState(initial);

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  const updateValue = (newValue) => setValue(newValue)

  return [value, updateValue];
}

export default useLocalStorage;