/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = ({ close, showSelect }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mode, setMode] = useState("Online");

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
          toast.success("Thank you for submitting your response.");
          setName("");
          setEmail("");
          setPhone("");
          setMode("Online");
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
      {showSelect && (
        <div className='preferredMode'>
          <label>Preferred mode of learning</label>
          <select
            name='mode'
            id='mode'
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value='Online'>Online</option>
            <option value='Offline'>Offline</option>
          </select>
        </div>
      )}
      {close ? (
        <close>
          <button type='submit' id='submitButton'>
            Enquire Now
          </button>
        </close>
      ) : (
        <button type='submit' id='submitButton'>
          Enquire Now
        </button>
      )}
    </form>
  );
};

export default ContactForm;
