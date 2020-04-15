import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [] = useLocalStorage("");

  useEffect(() => {}, []);
};

export default useDarkMode;
