import { useEffect, useState } from "react";






export default function useBackToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(
    () => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    },
    [],
    [10]
  );

  // This function will scroll the window to the top
  const scrollToTop = () => {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.scroll({
        top: "0",
        behavior: "smooth",
      });
    }
  };

  return { showButton, scrollToTop };
}
