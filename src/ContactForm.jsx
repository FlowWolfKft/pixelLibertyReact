import { Coins } from "lucide-react";
import React, { useState, useEffect } from "react";
import Select from "react-select";
function ContactForm({ forras }) {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formForras, setFormForras] = useState(forras || "egyeb");
  const [formText, setFormText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const options = [
    { value: "logo", label: "Logótervezés" },
    { value: "onepage", label: "Egyedi weboldal" },
    { value: "business", label: "Üzleti weboldal" },
  ];
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (forras) {
      options.map((opt) => {
        if (opt.value === forras) {
          setSelectedService(opt);
        }
      });
    }
  }, [forras]);

  const handleFormSubmit = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    fetch("https://email.pixelliberty.hu/email", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        name: formName,
        email: formEmail,
        subject: formSubject,
        forras: formForras,
        text: formText,
      }),
    }).then((response) => {
      setFormName("");
      setFormEmail("");
      setFormSubject("");
      setFormText("");
      setShowPopup(true);
    });
    return false;
    //
  };

  return (
    <>
      <form
        className="contact-form"
        action="#"
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Név*"
          value={formName}
          onChange={(event) => setFormName(event.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail cím*"
          required
          value={formEmail}
          onChange={(event) => setFormEmail(event.target.value)}
        />
        <input
          type="text"
          name="subject"
          placeholder="Tárgy"
          value={formSubject}
          onChange={(event) => setFormSubject(event.target.value)}
        />
        {forras ? (
          <Select className="pl-select"
          classNamePrefix="pl"
          
            value={selectedService}
            options={options}
            onChange={(option) => {
              setFormForras(option.value);
              setSelectedService(option);
            }}
            placeholder="Válassz szolgáltatást"
          />
        ) : (
          <input type="hidden" name="forras" value={forras} />
        )}
        <textarea
          name="message"
          placeholder="Üzenet"
          rows="6"
          required
          value={formText}
          onChange={(event) => setFormText(event.target.value)}
        ></textarea>
        <span>*Kötelezően kitöltendő</span>
        <label className="checkbox">
          <input type="checkbox" required />

          <span>
            Elolvastam és elfogadom az{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Adatkezelési Tájékoztatót
            </a>
            .
          </span>
        </label>
        <button type="submit">Küldés</button>
      </form>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Köszönöm! Az üzeneted sikeresen elküldve.</p>

            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
