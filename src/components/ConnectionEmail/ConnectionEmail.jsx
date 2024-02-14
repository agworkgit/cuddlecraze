import React, { useState, useRef } from 'react';
import petsData from '../PetCard/data/petData.json';
import './ConnectionEmail.css';

const ConnectionEmail = () => {
  const form = useRef();
  const validation = useRef();
  const dog = JSON.parse(localStorage.getItem("selectedDog"));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const placeholderMsg = `I'm Interested In Adopting ${dog?.name}! ID: ${dog?.id}`;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email...');

    // Send email using emailjs library
    emailjs
      .sendForm('service_zqg332a', 'template_ytgb7dh', form.current, {
        publicKey: '6djx-lBSNW1kfuDUB',
      })
      .then(() => {
        console.log('SUCCESS!');
        setName('');
        setEmail('');
        setMessage('');
        const messageSent = document.createElement('p');
        messageSent.textContent = 'Your message has been sent!';
        validation.current.appendChild(messageSent);

        // Update the JSON file with the attribute 'contacted' set to 'true' for the corresponding dog
        const updatedPetsData = petsData.map((pet) => {
          if (pet.id === dog.id) {
            console.log('Updating contacted status for pet:', pet.id);
            return {
              ...pet,
              contacted: true,
            };
          }
          return pet;
        });

        console.log('Updated pets data:', updatedPetsData);

        // Save the updated pets data back to local storage
        localStorage.setItem('petData', JSON.stringify(updatedPetsData));
        console.log('Updated contactedPetsData in local storage:', localStorage.getItem('petData'));
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <section id="contactBox" className="">
      <h2>Can You Give This Dog A New Home?</h2>
      <p className="subtitle">If you would like to connect with this dog's current owner, please fill out the form below and our team will pass on your details!</p>
      <div>
        <div>
          <form id="contact-form" ref={form}>
            <div className="nameEmail">
              <label htmlFor="name" className="">Your name</label>
              <textarea type="text" name="user_name" id="name" className="nameInput" value={name} onChange={(e) => setName(e.target.value)}></textarea>
              <label htmlFor="email" className="">Your email</label>
              <textarea type="text" id="email" name="user_email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></textarea>

            </div>
            <div className='subjectBox'>
              <label htmlFor="email" className="">Subject</label>
              <textarea type="text" name="subject" id="subject" className="form-control" readOnly>{placeholderMsg}</textarea>
            </div>
            <div className="messageBox">
              <label htmlFor="message">Your Message</label>
              <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
          </form>
        </div>
        <div className="">
          <p>Please include:</p>
          <ol>
            <li>Your full name</li>
            <li>Your age</li>
            <li>The size of your household</li>
            <li>Any current pets</li>
          </ol>
          <p>Note: Messages received without this information will not be passed along</p>
        </div>
        <button id='sendButton' className="button" onClick={sendEmail}>Send</button>
      </div>
      <div ref={validation}></div>
    </section>
  );
};

export default ConnectionEmail;
