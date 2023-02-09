import React from "react";

function Contact() {
  const inputStyle = {
    backgroundColor: "white"
  };

  return (
    <div id="form">
      <form
        id="contact-form"
        // action={FORM_ENDPOINT}
      >
        <div>
          <input type="text" style={inputStyle} placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" style={inputStyle} placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" style={inputStyle} name="message" required />
        </div>
        <div>
          <button type="submit" style={inputStyle} > Send a message </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
