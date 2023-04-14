import { useEffect, useState } from "react";

export default function useBackToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(
    () => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset >0) {
          setShowButton(true);
          document.getElementById("mouse").style.display = "none";
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
  
    document.getElementById("home").scrollIntoView();
   
   
  };

  return { showButton, scrollToTop };
}
