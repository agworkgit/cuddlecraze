import React, { useRef } from 'react';
import './ConnectionEmail.css'

export const ConnectionEmail = () => {
  const form = useRef();
  const validation = $('#validation')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zqg332a', 'template_ytgb7dh', form.current, {
        publicKey: '6djx-lBSNW1kfuDUB',
      })
      .then(
        () => {
        console.log('SUCCESS!');
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

<section id="contactBox" className="mb-4">

<h2 className="h1-responsive font-weight-bold text-center my-4">Can You Give This Dog A New Home?</h2>
<p className="text-center w-responsive mx-auto mb-5">If you would like to connect with this dog's current owner, please fill out the form below and our team will pass on your details!</p>

<div className="row">

    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" ref={form}>

            <div className="row">

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <label for="name" className="">Your name</label>
                        <input type="text" name="user_name" id="name" className="form-control"></input>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <label for="email" className="">Your email</label>
                        <input type="text" id="email" name="user_email" className="form-control"></input> 
                    </div>
                </div>

            </div>

            <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" name="user_name" id="name" className="form-control">I'm Interested In Adopting</input>
                    </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form">
                    <label for="message">Your Message</label>
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea> 
                    </div>
                </div>
            </div>

        </form>

    </div>

    <div class="col-md-3">
        <p>Please include:</p>
        <ol>
            <li>Your full name</li>
            <li>Your age</li>
            <li>The size of your household</li>
            <li>Any current pets</li>
        </ol>
        <p>Note: Messages received without this information will not be passed along</p>
    </div>

    <button id='sendButton' className="btn btn-primary" onClick={sendEmail}>Send</button>
    

</div>

<div id="validation"></div>

</section>
  );
};

export default ConnectionEmail


                
                        


