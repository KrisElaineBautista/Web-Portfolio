import React, { useState } from 'react';
import '../styles/index.css'; 
import { database } from '../firebase';
import { ref, push } from 'firebase/database'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formKey, setFormKey] = useState(0);
  
  // NEW: State to control the custom popup
  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const contactRef = ref(database, 'contacts');
      await push(contactRef, formData);
      
      // Store the name for the popup before clearing the form
      setSubmittedName(formData.name);
      setShowPopup(true);
      
      setFormData({ name: '', email: '', message: '' });
      setFormKey(prev => prev + 1);
      
    } catch (error) {
      console.error('Firebase Error:', error);
      alert('Failed to send message.');
    }
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 160px)' }}>
      <div className="page-container" style={{ flex: 1, width: '95%', maxWidth: '1200px' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text)' }}>Contact Me</h1>
          <div className="title-underline" style={{ margin: '0.5rem auto 0 auto' }}></div>
          <p style={{ color: 'var(--text)', marginTop: '1rem' }}>Let's connect!</p>
        </header>

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '2rem',
          width: '100%',
          marginBottom: '4rem'
        }}>
          
          {/* Contact Info Card */}
          <div className="content-card" style={{ flex: '1', minWidth: '320px', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--btn-text)', fontSize: '1.6rem' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <p style={{ margin: 0 }}><i className="fa-solid fa-location-dot" style={{ color: 'var(--btn-text)', width: '20px', marginRight: '8px' }}></i><strong>Location:</strong> Fairview, Quezon City</p>
              <p style={{ margin: 0 }}><i className="fa-solid fa-envelope" style={{ color: 'var(--btn-text)', width: '20px', marginRight: '8px' }}></i><strong>Email:</strong> kris.elainebautista@gmail.com</p>
              <p style={{ margin: 0 }}><i className="fa-solid fa-phone" style={{ color: 'var(--btn-text)', width: '20px', marginRight: '8px' }}></i><strong>Phone:</strong> 09568321104</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="content-card" style={{ flex: '1.2', minWidth: '320px', maxWidth: '600px', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--btn-text)', fontSize: '1.6rem' }}>Send a Message</h2>
            <form key={formKey} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input name="name" placeholder="Your Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} value={formData.name} onChange={handleChange} required />
              <input name="email" type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} value={formData.email} onChange={handleChange} required />
              <textarea name="message" rows={5} placeholder="Your Message" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', resize: 'none' }} value={formData.message} onChange={handleChange} required />
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '12px' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* --- CUSTOM POPUP UI --- */}
      {showPopup && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center',
          alignItems: 'center', zIndex: 1000, padding: '20px'
        }}>
          <div className="content-card" style={{
            maxWidth: '400px', width: '100%', textAlign: 'center', padding: '2.5rem',
            animation: 'popUp 0.3s ease-out'
          }}>
            <i className="fa-solid fa-circle-check" style={{ fontSize: '4rem', color: '#4BB543', marginBottom: '1.5rem' }}></i>
            <h2 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Sent Successfully!</h2>
            <p style={{ color: 'var(--text)', opacity: 0.8, lineHeight: '1.5', marginBottom: '2rem' }}>
              Thank you, <strong>{submittedName}</strong>! Your message has been sent. I will get back to you as soon as possible.
            </p>
            <button 
              className="btn-primary" 
              onClick={() => setShowPopup(false)}
              style={{ padding: '10px 30px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Simple animation for the popup */}
      <style>{`
        @keyframes popUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Contact;