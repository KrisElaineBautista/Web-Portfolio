import React from 'react';

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'November 25, 2023',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=62F207568DF947A7704147BF9C189A63514B93642FDDAB74330FFE0675E88A25',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  },
  {
    name: 'Oracle Cloud Data Management 2023 Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'November 24, 2023',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=1E333089F05C9C938C2110AAA3E02D102CCFBFD3F7C91C504C435B31EA78BD7A',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  },
  {
    name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'November 16, 2023',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=F9A43403BD2B46152E3ABDF7B7B64893C63C229416D7274C6994A3343790265F',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  },
  {
    name: 'SQL and Relational Databases 101',
    issuer: 'Cognitive Class',
    date: 'November 1, 2023',
    link: 'https://courses.cognitiveclass.ai/certificates/20349553d9af4f3cb2361c2fce751b2a',
    icon: '📊',
  },
  {
    name: 'NoSQL and DBaaS 101',
    issuer: 'Cognitive Class',
    date: 'April 27, 2024',
    link: 'https://courses.cognitiveclass.ai/certificates/cadbee531a174236853fc97bd1352b50',
    icon: '📊',
  },
  {
    name: 'Introduction to Cloud',
    issuer: 'Cognitive Class',
    date: 'April 30, 2024',
    link: 'https://courses.cognitiveclass.ai/certificates/d978aa32f0ce4e68b47e969eb411326a',
    icon: '📊',
  },
  {
    name: 'Intro to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'September 10, 2024',
    link: 'https://www.credly.com/badges/fb3cf107-2bd3-41ca-a509-c2103b684eed/public_url',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'October 6, 2024',
    link: 'https://www.credly.com/badges/a9a454e1-86fb-4eec-94a5-0abfe1d95d8f',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
  {
    name: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: 'May 15, 2025',
    link: 'https://www.credly.com/badges/03943c8e-5633-4ae9-9345-534eb6a3d279/public_url',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
];

const Certifications = () => {
  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text)' }}>
        🎓 Certifications
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              padding: '1.5rem',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              background: 'var(--card)',
              textDecoration: 'none',
              color: 'var(--text)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {cert.icon.startsWith('http') ? (
                <img src={cert.icon} alt={cert.issuer} style={{ width: 40 }} />
              ) : (
                <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
              )}
              <strong>{cert.name}</strong>
            </div>
            <div>
              <small><b>Issuer:</b> {cert.issuer}</small><br />
              <small><b>Date:</b> {cert.date}</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
