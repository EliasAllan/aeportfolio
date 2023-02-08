import React from "react";

function Contact() {
  return (
    <form
    id="contact-form"
    // action={FORM_ENDPOINT}
    // onSubmit={handleSubmit}
    // method="POST"
    // target="_blank"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
}

export default Contact;
