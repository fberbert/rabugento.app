"use client";

import React, { createContext, useContext, useState } from "react";

type SectionHash = `#${string}`;

type Ctx = {
  activeSection: SectionHash;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionHash>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<Ctx | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionHash>("#home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) throw new Error("useActiveSectionContext outside provider");
  return ctx;
};
