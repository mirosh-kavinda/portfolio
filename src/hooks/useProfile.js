import { useMemo } from "react";
import { useSiteData } from "../context/SiteDataContext";

// Firebase stores lists as either arrays or keyed objects.
function toList(value) {
  if (!value) return [];
  return (Array.isArray(value) ? value : Object.values(value)).filter(Boolean);
}

/** Site content, all read from `siteData` in the Firebase Realtime Database (see README). */
export default function useProfile() {
  const { siteData, loading } = useSiteData() || {};

  return useMemo(
    () => ({
      loading,
      landing: siteData?.LandingData || {},
      about: siteData?.AboutPageData || {},
      statement: siteData?.about || {},
      experience: toList(siteData?.experience),
      highlights: toList(siteData?.highlights),
      roles: toList(siteData?.roles),
      contact: siteData?.contact || {},
      products: toList(siteData?.products),
      certifications: toList(siteData?.certifications),
      techStack: toList(siteData?.techStack),
    }),
    [siteData, loading]
  );
}
