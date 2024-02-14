import React, { useRef } from 'react';
import './ConnectionEmail.css'

export const ConnectionEmail = () => {
  const form = useRef();
  const validation = $('#validation')
  const dog = JSON.parse(localStorage.getItem("selectedDog"))
  const placeholderMsg = "I'm Interested In Adopting " + dog.name + "! ID: " + dog.id 

  const nameInput = $('#name')
  const emailInput = $('#email')
  const messageInput = $('#message')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zqg332a', 'template_ytgb7dh', form.current, {
        publicKey: '6djx-lBSNW1kfuDUB',
      })
      .then(
        () => {
        console.log('SUCCESS!');
        nameInput.text('')
        emailInput.text('')
        messageInput.text('')
        const messageSent = $('<p>')
        messageSent.text('Your message has been sent!')
        validation.append(messageSent)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

<section id="contactBox" className="">

<h2>Can You Give This Dog A New Home?</h2>
<p className="subtitle">If you would like to connect with this dog's current owner, please fill out the form below and our team will pass on your details!</p>

<div >
    <div>
        <form id="contact-form" ref={form}>

            <div className="nameEmail">
                <label htmlFor="name" className="">Your name</label>
                <textarea type="text" name="user_name" id="name" className="nameInput"></textarea>
                    
                <label htmlFor="email" className="">Your email</label>
                <textarea type="text" id="email" name="user_email" className="form-control"></textarea> 
            </div>
            
            <div className='subjectBox'>
                <label htmlFor="email" className="">Subject</label>
                <textarea type="text" name="subject" id="subject" className="form-control">{placeholderMsg}</textarea> 
            </div> 
            
            <div className="messageBox">
                    <label htmlFor="message">Your Message</label>
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea> 
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

<div id="validation"></div>

</section>
  );
};

export default ConnectionEmail


                
                        


