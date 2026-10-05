import React from "react";
import { useState, useEffect } from "react";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Ez a weboldal sütiket használ a felhasználói élmény javítása
          érdekében. A használat folytatásával elfogadod a sütik használatát.
        </p>

        <div className="cookie-buttons">
          <button onClick={acceptCookies}>Elfogadom</button>
          <button onClick={declineCookies}>Elutasítom</button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;