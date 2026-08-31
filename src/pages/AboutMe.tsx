import '../styles/index.css';

const AboutMe = () => {
  return (
    <div className="about-page">
      <style>{`
        .about-page {
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .about-page,
        .about-page * {
          box-sizing: border-box;
        }

        /* =========================================
           HEADER
        ========================================= */

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-top: 5rem;
        }

        .about-header h1 {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text);
          margin: 0;
        }

        /* =========================================
           CARDS
        ========================================= */

        .about-page .content-card {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        /* =========================================
           CARD HEADER
        ========================================= */

        .about-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .about-card-header i {
          font-size: 1.5rem;
          color: var(--btn-text);
          width: 30px;
          text-align: center;
          flex-shrink: 0;
        }

        .about-card-header h2 {
          margin: 0;
          color: var(--btn-text);
          font-size: 1.5rem;
          font-weight: 800;
        }

        /* =========================================
           TEXT
        ========================================= */

        .about-text {
          line-height: 1.8;
          color: var(--text);
          margin: 0;
        }

        /* =========================================
           CAREER INTERESTS
        ========================================= */

        .career-list {
          padding-left: 1.5rem;
          color: var(--text);
          line-height: 1.8;
          margin-bottom: 0;
        }

        .career-list li {
          margin-bottom: 0.4rem;
        }

        /* =========================================
           STRENGTHS
        ========================================= */

        .strength-grid {
          display: grid;
          grid-template-columns:
            repeat(
              auto-fit,
              minmax(220px, 1fr)
            );
          gap: 1.5rem;
        }

        .strength-item {
          padding: 1.25rem;
          border:
            1px solid var(--border);
          border-radius: 12px;
          background:
            rgba(255, 255, 255, 0.08);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .strength-item:hover {
          transform: translateY(-4px);
          border-color: var(--btn-bg);
          box-shadow: var(--shadow);
        }

        .strength-item h3 {
          color: var(--btn-text);
          margin:
            0 0 0.5rem;
          font-size: 1.05rem;
        }

        .strength-item p {
          color: var(--text);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.9;
        }

        /* =========================================
           EXPERIENCE
        ========================================= */

        .experience-item {
          border-left:
            3px solid var(--border);
          padding-left: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
        }

        .experience-item:last-child {
          margin-bottom: 0;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--btn-bg);
          left: -6.5px;
          top: 6px;
          box-shadow:
            0 0 0 4px var(--card);
        }

        .experience-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text);
          margin: 0;
        }

        .experience-company {
          color: var(--btn-text);
          font-weight: 700;
          margin: 5px 0;
        }

        .experience-date {
          font-size: 0.9rem;
          color: var(--text);
          opacity: 0.75;
          margin-top: 1rem;
          margin-bottom: 0;
        }

        .experience-list {
          padding-left: 1.2rem;
          margin-top: 1rem;
          margin-bottom: 0;
          color: var(--text);
          line-height: 1.7;
        }

        .experience-list li {
          margin-bottom: 0.5rem;
        }

        /* =========================================
           TECHNICAL SKILLS
        ========================================= */

        .skills-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .skills-list li {
          color: var(--text);
          margin-bottom: 0.9rem;
          line-height: 1.6;
        }

        .skills-list li:last-child {
          margin-bottom: 0;
        }

        .skill-label {
          color: var(--btn-text);
          font-weight: 800;
        }

        /* =========================================
           SKILL TAGS
        ========================================= */

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.25rem;
        }

        .skill-tag {
          background: var(--border);
          color: var(--text);
          padding: 7px 13px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          transition:
            background-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;
        }

        .skill-tag:hover {
          background: var(--btn-bg);
          color: var(--btn-text);
          transform: translateY(-2px);
        }

        /* =========================================
           EDUCATION
        ========================================= */

        .education-item {
          border-left:
            3px solid var(--border);
          padding-left: 1.5rem;
          margin-bottom: 1.75rem;
          position: relative;
        }

        .education-item:last-child {
          margin-bottom: 0;
        }

        .education-item::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--btn-bg);
          left: -6.5px;
          top: 6px;
          box-shadow:
            0 0 0 4px var(--card);
        }

        .education-degree {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text);
          margin: 0;
        }

        .education-school {
          color: var(--btn-text);
          font-weight: 700;
          margin: 5px 0;
        }

        .education-date {
          color: var(--text);
          font-size: 0.9rem;
          opacity: 0.75;
          margin: 0;
        }

        /* =========================================
           DOWNLOAD / RESUME BUTTON
        ========================================= */

        .about-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin:
            2.5rem auto 4rem;
          flex-wrap: wrap;
        }

        .about-action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 12px 24px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background-color 0.3s ease;
        }

        .about-action-primary {
          background: var(--btn-bg);
          color: var(--btn-text);
          box-shadow: var(--shadow);
        }

        .about-action-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--hover-shadow);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 768px) {

          .about-header {
            padding-top: 3rem;
            margin-bottom: 2rem;
          }

          .about-header h1 {
            font-size: 2.3rem;
          }

          .about-page .content-card {
            margin-left: 1rem;
            margin-right: 1rem;
          }

          .about-card-header h2 {
            font-size: 1.3rem;
          }

          .experience-item,
          .education-item {
            padding-left: 1rem;
          }

          .strength-grid {
            grid-template-columns: 1fr;
          }

          .about-actions {
            margin-bottom: 3rem;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 420px) {

          .about-header {
            padding-top: 2.5rem;
          }

          .about-header h1 {
            font-size: 1.9rem;
          }

          .about-page .content-card {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            padding: 1.25rem;
          }

          .about-card-header {
            gap: 0.75rem;
          }

          .about-card-header i {
            font-size: 1.25rem;
            width: 24px;
          }

          .about-card-header h2 {
            font-size: 1.15rem;
          }

          .experience-title,
          .education-degree {
            font-size: 1.05rem;
          }

          .experience-item,
          .education-item {
            padding-left: 0.85rem;
          }

          .about-action-button {
            width: 100%;
          }
        }
      `}</style>

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="about-header">
        <h1>About Me</h1>

        <div
          className="title-underline"
          style={{
            margin: '0.5rem auto 0 auto',
          }}
        />
      </header>

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <section className="content-card">
        <div className="about-card-header">
          <i className="fa-solid fa-graduation-cap"></i>

          <h2>Background</h2>
        </div>

        <p className="about-text">
          I'm a Bachelor of Science in Information Technology graduate
          from New Era University. Throughout my academic journey,
          I've developed a strong foundation in computer science
          principles, software development, database management,
          networking, and modern web technologies.
        </p>

        <p
          className="about-text"
          style={{
            marginTop: '1rem',
          }}
        >
          I'm interested in building practical, user-friendly
          applications and continuously expanding my technical
          knowledge through real-world projects and hands-on
          experience.
        </p>
      </section>

     

      {/* =========================================
          CAREER INTERESTS
      ========================================= */}

      <section className="content-card">
        <div className="about-card-header">
          <i className="fa-solid fa-gear"></i>

          <h2>Career Interests</h2>
        </div>

        <p
          className="about-text"
          style={{
            marginBottom: '1rem',
          }}
        >
          I'm passionate about technology and creating practical,
          user-friendly applications. My areas of interest include:
        </p>

        <ul className="career-list">
          <li>Frontend Development </li>
          <li>Web Development</li>
          <li>Database Management</li>
          <li>UI/UX Design</li>
          <li>Technical Support</li>
          <li>Mobile Development</li>
          <li>Networking</li>
        </ul>
      </section>

      {/* =========================================
          KEY STRENGTHS
      ========================================= */}

      <section className="content-card">
        <div className="about-card-header">
          <i className="fa-regular fa-lightbulb"></i>

          <h2>Key Strengths</h2>
        </div>

        <div className="strength-grid">

          <div className="strength-item">
            <h3>Technical Versatility</h3>

            <p>
              Combining software knowledge with hands-on skills in
              PC assembly, troubleshooting, and IT support.
            </p>
          </div>

          <div className="strength-item">
            <h3>User-Centric Focus</h3>

            <p>
              Passion for UI/UX design with a focus on creating
              applications that are practical and easy to navigate.
            </p>
          </div>

          <div className="strength-item">
            <h3>Information Systems</h3>

            <p>
              Strong foundation in database management and system
              organization developed through my IT studies.
            </p>
          </div>

          <div className="strength-item">
            <h3>Adaptability</h3>

            <p>
              Eager to learn new technologies and industry tools,
              moving quickly from theory to practical application.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          WORK EXPERIENCE
      ========================================= */}

      <section className="content-card">

        <div className="about-card-header">

          <i className="fa-solid fa-briefcase"></i>

          <h2>Work Experience</h2>

        </div>

        {/* Simplevia */}

        <div className="experience-item">

          <h3 className="experience-title">
            User Experience Designer Intern
          </h3>

          <p className="experience-company">
            Simplevia Technologies Inc.
          </p>

          <ul className="experience-list">

            <li>
              Collaborated with the design team using Figma to create
              high-fidelity UI designs.
            </li>

            <li>
              Presented completed prototypes to the supervisor and
              secured final design approval.
            </li>

          </ul>

          <p className="experience-date">
            Feb 2026 - Mar 2026 | Makati City
          </p>

        </div>

        {/* SSS */}

        <div className="experience-item">

          <h3 className="experience-title">
            IT Intern
          </h3>

          <p className="experience-company">
            SSS (Social Security System)
          </p>

          <ul className="experience-list">

            <li>
              Organized files and technical documentation, helping
              improve department workflow efficiency.
            </li>

            <li>
              Learned and utilized Oracle Developer to assist with
              information system database management.
            </li>

          </ul>

          <p className="experience-date">
            Oct 2025 - Dec 2025 | Quezon City
          </p>

        </div>

      </section>

      {/* =========================================
          TECHNICAL SKILLS
      ========================================= */}

      <section className="content-card">

        <div className="about-card-header">

          <i className="fa-solid fa-bolt"></i>

          <h2>Technical Skills</h2>

        </div>

        <ul className="skills-list">

          <li>
            <span className="skill-label">
              Databases:
            </span>{' '}
            MongoDB, Oracle SQL Developer, IBM Db2
          </li>

          <li>
            <span className="skill-label">
              Programming:
            </span>{' '}
            HTML, CSS, PHP, Python, JavaScript
          </li>

          <li>
            <span className="skill-label">
              Web Development:
            </span>{' '}
            React, Vite, HTML, CSS, JavaScript
          </li>

          <li>
            <span className="skill-label">
              Mobile & UI/UX:
            </span>{' '}
            React Native, Android Studio, Figma, Prototyping
          </li>

          <li>
            <span className="skill-label">
              IT Support:
            </span>{' '}
            PC Assembly, Troubleshooting, Technical Support
          </li>

          <li>
            <span className="skill-label">
              Tools:
            </span>{' '}
            GitHub, Lucidchart, Canva, MS Office
          </li>

        </ul>

        <div className="skill-tags">

          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React Native</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">MongoDB</span>
          <span className="skill-tag">Oracle</span>
          <span className="skill-tag">Figma</span>
          <span className="skill-tag">GitHub</span>
          <span className="skill-tag">Power BI</span>

        </div>

      </section>

      {/* =========================================
          EDUCATION
      ========================================= */}

      <section className="content-card">
        <div className="about-card-header">
          <i className="fa-solid fa-graduation-cap"></i>
          <h2>Education</h2>
        </div>

        {/* University */}
        <div className="education-item">
          <h3 className="education-degree">
            Bachelor of Science in Information Technology
          </h3>
          <p className="education-school">
            New Era University
          </p>
          <p className="education-date">
            2022 - 2026
          </p>
        </div>

      </section>


      

    </div>
  );
};

export default AboutMe;
