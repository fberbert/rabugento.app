"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function useSectionInView(hash: `#${string}`, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [inView, hash, setActiveSection, timeOfLastClick]);

  return { ref };
}
