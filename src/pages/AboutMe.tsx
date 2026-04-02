
import '../styles/index.css';

const AboutMe = () => {
  return (
    <div className="page-container">
      <header className="about-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text)' }}>About Me</h1>
        <div className="title-underline" style={{ margin: '0.5rem auto 0 auto' }}></div>
      </header>

      {/* Background */}
      <section className="content-card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <i className="fa-solid fa-graduation-cap" style={{ fontSize: '1.5rem', color: 'var(--btn-text)' }}></i>
          <h2 style={{ margin: 0, color: 'var(--btn-text)' }}>Background</h2>
        </div>
        <div className="card-content">
          <p style={{ lineHeight: '1.7', color: 'var(--text)' }}>
            I'm a 4th year Bachelor of Science in Information Technology student at New Era University, 
            expected to graduate in 2026. Throughout my academic journey, I've developed a strong 
            foundation in computer science principles, software development, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Career Interests */}
      <section className="content-card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <i className="fa-solid fa-gear" style={{ fontSize: '1.5rem', color: 'var(--btn-text)' }}></i>
          <h2 style={{ margin: 0, color: 'var(--btn-text)' }}>Career Interests</h2>
        </div>
        <div className="card-content">
          <p style={{ marginBottom: '1rem', color: 'var(--text)' }}>I'm passionate about web development and creating user-friendly applications. My interests include:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text)', lineHeight: '1.8' }}>
            <li>Frontend Development (React, JavaScript)</li>
            <li>Web Development</li>
            <li>Database Management</li>
            <li>UI/UX Design</li>
            <li>Technical Support</li>
            <li>Mobile Development</li>
            <li>Networking</li>
          </ul>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="content-card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <i className="fa-regular fa-lightbulb" style={{ fontSize: '1.5rem', color: 'var(--btn-text)' }}></i>
          <h2 style={{ margin: 0, color: 'var(--btn-text)' }}>Key Strengths</h2>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <div className="strength-item">
            <h3 style={{ color: 'var(--btn-text)', marginBottom: '0.5rem' }}>Technical Versatility</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Combining software knowledge with hands-on skills in PC assembly and IT support.</p>
          </div>
          <div className="strength-item">
            <h3 style={{ color: 'var(--btn-text)', marginBottom: '0.5rem' }}>User-Centric Focus</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Passion for UI/UX design to ensure applications are practical and easy to navigate.</p>
          </div>
          <div className="strength-item">
            <h3 style={{ color: 'var(--btn-text)', marginBottom: '0.5rem' }}>Information Systems</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Solid foundation in database management and system organization from my NEU studies.</p>
          </div>
          <div className="strength-item">
            <h3 style={{ color: 'var(--btn-text)', marginBottom: '0.5rem' }}>Adaptability</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Eager to learn and apply new industry tools, moving quickly from theory to practice.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutMe;