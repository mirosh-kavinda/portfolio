import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Types and erases each word in turn. Returns the first word unchanged when
 * the visitor prefers reduced motion. Pass a stable `words` array.
 */
export default function useTypewriter(words, { typeMs = 85, eraseMs = 35, holdMs = 1600 } = {}) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduce || !words.length) return undefined;
    const word = words[index % words.length];
    let timer;

    if (!erasing && text === word) {
      timer = setTimeout(() => setErasing(true), holdMs);
    } else if (erasing && text === "") {
      setErasing(false);
      setIndex((i) => i + 1);
    } else {
      timer = setTimeout(
        () => setText(erasing ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        erasing ? eraseMs : typeMs
      );
    }
    return () => clearTimeout(timer);
  }, [text, erasing, index, words, reduce, typeMs, eraseMs, holdMs]);

  return reduce ? words[0] || "" : text;
}
