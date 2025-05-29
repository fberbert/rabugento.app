// src/components/CookieConsent.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "accepted") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
        <div className="container-section flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 text-sm">
            Nosso site utiliza cookies e tecnologias semelhantes para melhorar sua
            experiência. Ao continuar navegando, você concorda com nossa Política de
            Privacidade. 
          </p>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDecline} className="text-gray-200 hover:text-white">
              Recusar 
            </Button> 

            <Button onClick={handleAccept}>Aceitar</Button>
          </div>
        </div>
      </div>
  );
}
