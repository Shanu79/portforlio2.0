import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v1mdn9l', 'template_o6z40ze', form.current, '0VnmSbTNoBBP88pRa')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>. . .</h2>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <span class="material-symbols-rounded">mail</span>
            <h4>Email</h4>
            <h5>shanu.r9971@gamil.com</h5>
            <a href='mailto:shanu.r9971@gmail.com' target='_blank'>Send a mail</a>
          </article>
          <article className='contact__option'>
          <span class="material-symbols-rounded">chat</span>
            <h4>WhatsApp</h4>
            <h5>+91 8144665857</h5>
            <a href='https://wa.me/+918144665857?text=hi' target='_blank'>Send a message</a>
          </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder='Your E-Mail' required/>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contact