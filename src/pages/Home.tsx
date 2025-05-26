import React from 'react';
import Skills from './Skills'; // adjust the path if it's in another folder
import humanImg from '../assets/human.png';
const Home = () => (
  <section
    style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      color: 'var(--text)',
      background: 'var(--bg)',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <img
        src={humanImg}
        alt="IMG"
        style={{
          width: '120px',
          borderRadius: '50%',
          marginBottom: '1rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>

    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
      Hi there! I'm Kris Elaine S. Bautista
    </h2>
    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
      I have a passion for coding and a knack for effective database management. I thrive on solving
      complex problems and crafting elegant solutions. My tech journey began with the pursuit of a BS in
      Information Technology, and I've been immersed in the world of technology ever since.
    </p>

    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎓 Education</h3>
    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
      <strong>BS Information Technology</strong><br />
      New Era University<br />
      <small>2022 - Present</small>
    </p>

    {/* Skills Section */}
    <Skills />

    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>📬 Get in Touch</h3>
    <p style={{ fontSize: '1.1rem' }}>
      Let’s collaborate or connect! <br />
      <a
        href="mailto:your.email@example.com"
        style={{ color: 'var(--accent)', textDecoration: 'none' }}
      >
          kris.elainebautista@gmail.com
      </a>
    </p>
  </section>
);

export default Home;
