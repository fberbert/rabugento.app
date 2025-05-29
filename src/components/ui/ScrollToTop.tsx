"use client";

import { FaArrowUp } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("#home");
        setTimeOfLastClick(Date.now());
      }}
      className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-primary-600 text-white shadow-lg flex items-center justify-center hover:bg-primary-700 transition"
    >
      <FaArrowUp />
    </button>
  );
}
