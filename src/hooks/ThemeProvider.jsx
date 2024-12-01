import React, {useState, createContext} from "react";
import { THEME_TYPE } from "../constants";

export const ThemeContext = createContext();

export const ThemeProvider = (group) => {
  const [theme, setTheme] = useState({
    theme: THEME_TYPE.DARK,
  });
  return (
  	<ThemeContext.Provider value={[theme, setTheme]}>
  		{group.children}
	</ThemeContext.Provider>
  );
};

