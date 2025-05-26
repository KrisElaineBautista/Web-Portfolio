import React from 'react';

const Hero = () => (
  <section id="home" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem 2rem',
    textAlign: 'center',
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hi, I'm [Your Name]</h1>
    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text)' }}>
      I'm a frontend developer passionate about building modern, minimalist web experiences.
    </p>
    <a href="#projects" style={{
      marginTop: '2rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: 'var(--text)',
      color: 'var(--bg)',
      borderRadius: '8px',
      textDecoration: 'none'
    }}>
      View My Work
    </a>
  </section>
);

export default Hero;
