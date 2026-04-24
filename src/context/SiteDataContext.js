import React, { createContext, useContext, useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebaseConfig.js";

const SiteDataContext = createContext(null);

export const SiteDataProvider = ({ children }) => {
    const [siteData, setSiteData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSiteData = async () => {
            try {
                const snapshot = await get(ref(db, "siteData"));
                if (snapshot.exists()) {
                    setSiteData(snapshot.val());
                } else {
                    console.warn("No siteData found in Firebase.");
                }
            } catch (error) {
                console.error("Error fetching siteData:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSiteData();
    }, []);

    return (
        <SiteDataContext.Provider value={{ siteData, loading }}>
            {children}
        </SiteDataContext.Provider>
    );
};

export const useSiteData = () => useContext(SiteDataContext);
