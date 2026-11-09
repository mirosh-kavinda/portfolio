import React, { createContext, useContext, useEffect, useState } from "react";
import { getCached } from "../utils/firebaseCache";

const SiteDataContext = createContext(null);

/** Loads `siteData` once per visit (cached in the browser, see utils/firebaseCache). */
export const SiteDataProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCached("siteData")
      .then((value) => {
        if (value) setSiteData(value);
        else console.warn("No siteData found in Firebase.");
      })
      .catch((error) => console.error("Error fetching siteData:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SiteDataContext.Provider value={{ siteData, loading }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => useContext(SiteDataContext);
