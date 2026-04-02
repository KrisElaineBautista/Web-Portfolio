
import '../styles/index.css'; 

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header" style={{ textAlign: 'center', marginBottom: '3rem',marginTop: '5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text)' }}>Resume</h1>
        <div className="title-underline" style={{ margin: '0 auto 1.5rem auto' }}></div>
        <p className="resume-subtitle">Download my full resume or view the highlights below</p>
        <a href="/Resume_Bautista.pdf" download="Kris_Bautista_Resume.pdf" className="btn-primary">
          Download Resume (PDF)
        </a>
      </header>

      {/* Professional Summary */}
      {/* Changed class to content-card to match master index.css */}
      <section className="content-card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <i className="fa-regular fa-file-lines" style={{ fontSize: '1.5rem', color: 'var(--btn-text)' }}></i>
          <h2 style={{ margin: 0 }}>Professional Summary</h2>
        </div>
        <p className="description">
          Information Technology student seeking an opportunity where I can apply and further develop my 
          knowledge in system development, networking, and IT support. Eager to contribute to 
          real-world projects while learning from experienced professionals.
        </p>
      </section>

      {/* Work Experience */}
      <section className="content-card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <i className="fa-solid fa-briefcase" style={{ fontSize: '1.5rem', color: 'var(--btn-text)' }}></i>
          <h2 style={{ margin: 0 }}>Work Experience</h2>
        </div>
        
        <div className="resume-item" style={{ borderLeft: '3px solid var(--border)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text)' }}>User Experience Designer Intern</h3>
          <p style={{ color: 'var(--btn-text)', fontWeight: '600', margin: '5px 0' }}>Simplevia Technologies Inc.</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Feb 2026 - Mar 2026 | Makati City</p>
        </div>

        <div className="resume-item" style={{ borderLeft: '3px solid var(--border)', paddingLeft: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text)' }}>IT Intern</h3>
          <p style={{ color: 'var(--btn-text)', fontWeight: '600', margin: '5px 0' }}>SSS (Social Security System)</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Oct 2025 - Dec 2025 | Quezon City</p>
        </div>
      </section>

      {/* Skills */}
      <section className="content-card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <i className="fa-solid fa-bolt" style={{ fontSize: '1.5rem', color: 'var(--btn-text)' }}></i>
          <h2 style={{ margin: 0 }}>Technical Skills</h2>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--btn-text)' }}>Databases:</strong> MongoDB, Oracle SQL Developer, IBM Db2</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--btn-text)' }}>Programming:</strong> HTML, CSS, PHP, Python</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--btn-text)' }}>Mobile & UI/UX:</strong> React Native, Android Studio, Figma, Prototyping</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--btn-text)' }}>IT Support:</strong> PC Assembly, Troubleshooting, Technical Support</li>
          <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--btn-text)' }}>Tools:</strong> Github, Lucidchart, Canva, MS Office</li>
        </ul>
      </section>

      {/* Education */}
      <section className="content-card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <i className="fa-solid fa-graduation-cap" style={{ fontSize: '1.5rem', color: 'var(--btn-text)' }}></i>
          <h2 style={{ margin: 0 }}>Education</h2>
        </div>
        <div style={{ borderLeft: '3px solid var(--border)', paddingLeft: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text)' }}>Bachelor of Science in Information Technology</h3>
          <p style={{ color: 'var(--btn-text)', fontWeight: '600', margin: '5px 0' }}>New Era University</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>2022 - Present</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;