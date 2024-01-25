import { useEffect, useState } from "react";

export default function useAnimations() {
  const [loading, setLoading] = useState(true);
  const [pageloading, setPageloading] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setLoading(false);
    }, 1900);
    setTimeout(() => {
      setPageloading(false);
    }, 500);
  }, []);

  return { loading, pageloading };
}
