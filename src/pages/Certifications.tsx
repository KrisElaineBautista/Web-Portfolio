import { useState } from 'react';
import type { ChangeEvent } from 'react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    name: 'ISC2CC - Certified Cybersecurity - Domain 3: Access Control Concepts',
    issuer: 'ISC2',
    date: 'March 16, 2026',
    link: '#',
    icon: 'fa-solid fa-lock',
  },
  {
    name: 'ISC2CC - Certified Cybersecurity - Domain 2: Incident Response, BC & DR Concepts',
    issuer: 'ISC2',
    date: 'March 16, 2026',
    link: '#',
    icon: 'fa-solid fa-lock',
  },
  {
    name: 'ISC2CC - Certified Cybersecurity - Domain 1: Security Principles',
    issuer: 'ISC2',
    date: 'March 15, 2026',
    link: '#',
    icon: 'fa-solid fa-lock',
  },
  {
    name: 'ISC2CC - Certified Cybersecurity - Pre-Assessment',
    issuer: 'ISC2',
    date: 'March 15, 2026',
    link: '#',
    icon: 'fa-solid fa-lock',
  },
  {
    name: 'Setting Up Computer Servers',
    issuer: 'TESDA',
    date: 'March 13, 2026',
    link: 'https://drive.google.com/file/d/1VL7OrnriSrXx0242UXj_JznglmqlillR/view?usp=sharing',
    icon: 'fa-solid fa-server',
  },
  {
    name: 'Google Business Intelligence',
    issuer: 'Coursera / Google',
    date: 'March 6, 2026',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/1WY04M29KPR6',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  {
    name: 'Installing and Configuring Computer Systems',
    issuer: 'TESDA',
    date: 'February 27, 2026',
    link: 'https://drive.google.com/file/d/1Qaz4KUz_Jzfk978JABqPfbk0fdkO0F4c/view?usp=sharing',
    icon: 'fa-solid fa-screwdriver-wrench',
  },
  {
    name: 'Gemini Certified Student',
    issuer: 'Google Education',
    date: 'January 21, 2026',
    link: 'https://edu.google.accredible.com/ada3fa57-6749-4187-a67d-36be0f426b39#acc.jfICRyU7',
    icon: 'https://www.gstatic.com/lamda/images/favicon_v1_150160d1398251f5a901.svg',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'September 10, 2025',
    link: 'https://www.credly.com/badges/fb3cf107-2bd3-41ca-a509-c2103b684eed/public_url',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
  {
    name: 'Microsoft Artificial Intelligence: Azure AI Fundamentals',
    issuer: 'TESDA / Microsoft',
    date: 'June 28, 2025',
    link: 'https://drive.google.com/file/d/1L9S32aKmmvnk17sJweo8_RiqWRNR7GfP/view?usp=sharing',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'June 2, 2025',
    link: 'https://www.credly.com/badges/37dff89f-e8f8-4482-9aa4-ad129b837b4f',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
  {
    name: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'June 2, 2025',
    link: 'https://www.credly.com/badges/03943c8e-5633-4ae9-9345-534eb6a3d279/public_url',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
  {
    name: 'Data Analyst 101',
    issuer: 'Simplilearn',
    date: 'June 2, 2025',
    link: 'https://simpli-web.app.link/e/aGtK5ztwt1b',
    icon: 'fa-solid fa-chart-line',
  },
  {
    name: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: 'May 15, 2025',
    link: 'https://www.credly.com/badges/03943c8e-5633-4ae9-9345-534eb6a3d279/public_url',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
  {
    name: 'Analytics 101 for Businesses',
    issuer: 'ASKLEX',
    date: 'February 11, 2025',
    link: 'https://drive.google.com/file/d/1AtcC0Zjzp-jccPnyNRTiJGxVqAG5sBEi/view?usp=sharing',
    icon: 'fa-solid fa-chart-column',
  },
  {
    name: 'Big Data Applications',
    issuer: 'ASKLEX',
    date: 'February 11, 2025',
    link: 'https://drive.google.com/file/d/1EV1nOIrYqUZ2LpJkBJhoWGEZSJc-wRhW/view?usp=sharing',
    icon: 'fa-solid fa-database',
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'October 6, 2024',
    link: 'https://www.credly.com/badges/a9a454e1-86fb-4eec-94a5-0abfe1d95d8f',
    icon: 'https://img.shields.io/badge/Network-Cisco-blue?logo=cisco',
  },
  {
    name: 'Introduction to Cloud',
    issuer: 'Cognitive Class',
    date: 'April 30, 2024',
    link: 'https://courses.cognitiveclass.ai/certificates/d978aa32f0ce4e68b47e969eb411326a',
    icon: 'fa-solid fa-cloud',
  },
  {
    name: 'NoSQL and DBaaS 101',
    issuer: 'Cognitive Class',
    date: 'April 27, 2024',
    link: 'https://courses.cognitiveclass.ai/certificates/cadbee531a174236853fc97bd1352b50',
    icon: 'fa-solid fa-server',
  },
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
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
];

const Certifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [isLatestFirst, setIsLatestFirst] = useState(true);

  const issuers: string[] = ['All', 'Cisco', 'Oracle', 'TESDA', 'ISC2', 'Cognitive Class'];

  const filteredCerts: Certification[] = certifications
    .filter((cert: Certification) => {
      const matchesSearch =
        cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'All' || cert.issuer.includes(filter);
      return matchesSearch && matchesFilter;
    })
    .sort((a: Certification, b: Certification) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return isLatestFirst ? dateB - dateA : dateA - dateB;
    });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  return (
    <div className="page-container">
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text)' }}>Certifications</h1>
        <div className="title-underline" style={{ margin: '0.5rem auto 0 auto' }}></div>
      </header>

      {/* Search & Filter */}
      <div
        style={{
          marginBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '600px', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text)',
                opacity: 0.5,
              }}
            ></i>
            <input
              type="text"
              placeholder="Search by name or issuer..."
              className="content-card"
              style={{
                width: '100%',
                padding: '12px 20px 12px 45px',
                borderRadius: '12px',
                marginBottom: 0,
                boxSizing: 'border-box',
              }}
              onChange={handleSearchChange}
            />
          </div>

          {/* Sort Button */}
          <button
            className="btn-secondary"
            onClick={() => setIsLatestFirst(!isLatestFirst)}
            style={{
              padding: '12px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '45px',
              height: '45px',
              cursor: 'pointer',
            }}
            title={isLatestFirst ? 'Showing Latest First' : 'Showing Oldest First'}
          >
            <i className={`fa-solid fa-arrow-${isLatestFirst ? 'down-wide-short' : 'up-wide-short'}`}></i>
          </button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
          {issuers.map((issuer: string) => (
            <button
              key={issuer}
              onClick={() => setFilter(issuer)}
              className={filter === issuer ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '8px 16px', fontSize: '0.9rem' }}
            >
              {issuer}
            </button>
          ))}
        </div>
      </div>

      {/* Certification Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
        }}
      >
        {filteredCerts.length > 0 ? (
          filteredCerts.map((cert: Certification, index: number) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                height: '100%',
                padding: '1.5rem',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0 }}>
                  {cert.icon.startsWith('http') ? (
                    <img src={cert.icon} alt={cert.issuer} style={{ width: 45, height: 'auto', display: 'block' }} />
                  ) : (
                    <i
                      className={cert.icon}
                      style={{ fontSize: '2.2rem', color: 'var(--btn-text)', width: '45px', textAlign: 'center' }}
                    ></i>
                  )}
                </div>
                <strong style={{ fontSize: '1.05rem', lineHeight: '1.4', color: 'var(--btn-text)' }}>{cert.name}</strong>
              </div>

              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>
                  <span style={{ opacity: 0.7 }}>Issuer:</span> <b>{cert.issuer}</b>
                </p>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--text)' }}>
                  <span style={{ opacity: 0.7 }}>Date:</span> <b>{cert.date}</b>
                </p>
              </div>
            </a>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', opacity: 0.6 }}>No certifications found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Certifications;