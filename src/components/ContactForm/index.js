import React from 'react';
import emailjs from 'emailjs-com'
require('dotenv').config()


function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm( process.env.SERV_ID, process.env.TEMP_ID, e.target, process.env.USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

      return (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
};

export default ContactForm;