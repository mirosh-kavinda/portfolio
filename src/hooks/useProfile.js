import { useMemo } from "react";
import { useSiteData } from "../context/SiteDataContext";
import * as defaults from "../data/profile";

// Firebase stores lists as either arrays or keyed objects.
function toList(value) {
  if (!value) return null;
  const list = (Array.isArray(value) ? value : Object.values(value)).filter(Boolean);
  return list.length ? list : null;
}

/** Profile content: Firebase `siteData` when present, otherwise src/data/profile.js. */
export default function useProfile() {
  const { siteData, loading } = useSiteData() || {};

  return useMemo(
    () => ({
      loading,
      landing: siteData?.LandingData || {},
      about: siteData?.AboutPageData || {},
      experience: toList(siteData?.experience) || defaults.experience,
      highlights: toList(siteData?.highlights) || defaults.highlights,
      roles: toList(siteData?.roles) || defaults.roles,
      contact: { ...defaults.contact, ...(siteData?.contact || {}) },
      statement: { ...defaults.about, ...(siteData?.about || {}) },
      products: defaults.products,
    }),
    [siteData, loading]
  );
}
