import React from "react";
function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" name="name" placeholder="Név*" required />

      <input type="email" name="email" placeholder="E-mail cím*" required />

      <input type="text" name="subject" placeholder="Tárgy" />

      <textarea
        name="message"
        placeholder="Üzenet"
        rows="6"
        required
      ></textarea>
      <span>*Kötelezően kitöltendő</span>
      <label className="checkbox">
        <input type="checkbox" required />

        <span>
          Elolvastam és elfogadom az{" "}
          <a href="/adatkezelesi" target="_blank" rel="noopener noreferrer">
            Adatkezelési Tájékoztatót
          </a>
          .
        </span>
      </label>

      <button type="submit">Küldés</button>
    </form>
  );
}

export default ContactForm;
