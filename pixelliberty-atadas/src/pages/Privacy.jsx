import React from "react";
import PrivacyIntro from "./privacy/PrivacyIntro";
import PrivacyBilling from "./privacy/PrivacyBilling";
import PrivacyCookies from "./privacy/PrivacyCookies";
import PrivacyRights from "./privacy/PrivacyRights";

function Privacy() {
  return (
    <>
      <PrivacyIntro />
      <PrivacyBilling />
      <PrivacyCookies />
      <PrivacyRights/>
    </>
  );
}

export default Privacy;
