import React, { useState } from "react";
// import './style.css';

import { validateEmail } from "../utils/helpers";

function Contact() {
  const inputStyle = {
    backgroundColor: "white",
  };

  const [email, setEmail] = useState("");
  const [name, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

 
  function sendMail() {
    var contactName = name;
    var body = message;
    window.location.href =
      "mailto:allanrnelias@gmail.com?body=" + body + "&subject=" + contactName;
  }

  return (
    <>
      <form method="get" enctype="text/plain" className="form">
        <h2 font-weight="bolder">Email me</h2>
        <input
          style={inputStyle}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <textarea
          style={inputStyle}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button
          style={inputStyle}
          type="submit"
          value="Send"
          onClick={sendMail}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </>
  );
}

export default Contact;

// function Contact() {
//   // const inputStyle = {
//   //   backgroundColor: "white",
//   // };

//   const [email, setEmail] = useState("");
//   const [name, setUserName] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and message
//     if (inputType === "email") {
//       setEmail(inputValue);
//     } else if (inputType === "name") {
//       setUserName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !name) {
//       setErrorMessage("Email or username is invalid");
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
//     }

//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setUserName("");
//     setMessage("");
//     setEmail("");

//   };

//   function sendMail()
//   {
//       var contactName = name;
//       var body = message
//       window.location.href = "mailto:allanrnelias@gmail.com?body="+body+"&subject="+contactName

//   }

// return (
//   <>
//   <div>

//     <form  method="get" enctype="text/plain" className="form">
//     <h2 font-weight="bolder">Email me</h2>
//       <input

//         value={name}
//         name="name"
//         onChange={handleInputChange}
//         type="text"
//         placeholder="Name"
//       />
//       <textarea

//         value={message}
//         name="message"
//         onChange={handleInputChange}
//         type="text"
//         placeholder="message"
//       />
//       <button type="submit"  value="Send" onClick={sendMail}>
//         Submit
//       </button>
//     </form>
//     {errorMessage && (
//       <div>
//         <p className="error-text">{errorMessage}</p>
//       </div>
//     )}
//   </div>
//   <div>
//   <h2 font-weight="bolder" className="form">Or Email me at : allanrnelias@gmail.com </h2>
//   </div>
//   </>
// );
// }

// export default Contact;
