import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialState) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialState);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
