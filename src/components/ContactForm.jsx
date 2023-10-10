import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "prathmeshbuildfastwithai",
        "ai-academy-template",
        form.current,
        "9AQWkXrp7tz0-VKGe"
      )
      .then(
        () => {
          toast.success(
            "Thank you for submitting your response. We will contact you within 2 business days."
          );
          setName("");
          setEmail("");
          setPhone("");
        },
        (error) => {
          console.log(error);
          toast.error("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form} className='form'>
      <h3>Enquire Now</h3>
      <input
        required
        type='text'
        id='name'
        name='name'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type='text'
        id='mobile'
        name='phone'
        placeholder='Mobile Number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='email'
        id='email'
        name='email'
        placeholder='Email (Optional)'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit' id='submitButton'>
        Enquire Now
      </button>
    </form>
  );
};

export default ContactForm;
