import React, { useState } from 'react';
import '../styles/contact.css';
import { database } from '../firebase'; // ✅ Import your Firebase DB
import { ref, push } from 'firebase/database'; // ✅ Import DB functions

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactRef = ref(database, 'contacts');
      await push(contactRef, formData);
      alert(`Thanks, ${formData.name}! Your message has been sent.`);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section style={{ display: 'flex', gap: '2rem', padding: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 300px' }}>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> Kris Elaine S. Bautista</p>
        <p><strong>Email:</strong> kris.elainebautista@gmail.com</p>
        <p><strong>Phone:</strong> +1 123-456-7890</p>
        <p><strong>Location:</strong> Fairview, Quezon city</p>
      </div>

      <div style={{ flex: '1 1 300px' }}>
        <h2>Send a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
