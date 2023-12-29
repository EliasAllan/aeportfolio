import React, { useState } from "react";
// import './style.css';

import { checkPassword, validateEmail } from "../utils/helpers";

function Contact() {
    const inputStyle = {
    backgroundColor: "white",
    }

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

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

   

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");


  };

  function sendMail()
  {
      var contactName = name;
      var body = message
      window.location.href = "mailto:allanrnelias@gmail.com?body="+body+"&subject="+contactName

  }



  return (
    <div id="about-description">
      {/* <img className="selfie" src={profileSc} alt="allan" width="30%" /> */}

      <h1 id="about-text">
        Born and raised in Brazil, I moved to the United States at 17 years of
        age looking for better opportunities. I worked in the service industry
        for 9 years. I honed my soft skills , multitasking abilities and
        customer service before I decided to follow my passion for tech, but the
        knowledge I acquired bartending helps in every aspect of my life. It
        took some soul searching, but I decided the best way to to follow my
        passion for technology was to become a web developer. I could satisfy my
        need for a challenge . At the same time I could be creative, and create
        relationships with people . I joined the bootcamp program at the
        university of Pennsylvania not long after that, and after 6 months of
        learning, self-discovery, and lots of teamwork I was proudly certified
        as a Full Stack Web Developer. I was humbled. That entire time, I never
        had a doubt in my mind, that's where I was supposed to be. Contact me to
        create something special.
      </h1>
    </div>
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

//   return (
//     <>
//     <div>

//       <form  method="get" enctype="text/plain" className="form">
//       <h2 font-weight="bolder">Email me</h2>
//         <input
      
//           value={name}
//           name="name"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Name"
//         />
//         <textarea
        
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="message"
//         />
//         <button type="submit"  value="Send" onClick={sendMail}>
//           Submit
//         </button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//     <div>
//     <h2 font-weight="bolder" className="form">Or Email me at : allanrnelias@gmail.com </h2>
//     </div>
//     </>
//   );
// }

// export default Contact;
