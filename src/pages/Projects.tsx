import React from 'react';

const projects = [
  {
    title: 'Hotel Booking Website',
    description: 'A responsive hotel booking platform with room listings, availability checker, and booking forms.',
    techStack: ['HTML', 'CSS', 'PHP'],
    link: 'https://your-hotel-site-link.com',
    github: 'https://github.com/yourusername/hotel-booking-site',
  },
  {
    title: 'Android studio Apps',
    description: 'a collection of Android apps developed using Android Studio, showcasing various functionalities and designs.',
    techStack: ['Kotlin', 'Firebase'],
    link: 'https://expo.dev/@yourusername/lawyer-app',
    github: 'https://github.com/yourusername/lawyer-app',
  },
  {
    title: 'Bootstrap Portfolio Website',
    description: 'A personal portfolio site built with Bootstrap showcasing my skills and projects.',
    techStack: ['Bootstrap', 'HTML', 'PHP'],
    link: 'https://your-bootstrap-site.com',
    github: 'https://github.com/yourusername/bootstrap-portfolio',
  },
];

const githubIcon = (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.011-1.243-.017-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Projects = () => {
  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text)' }}>
        💻 Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              padding: '1.5rem',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              background: 'var(--card)',
              color: 'var(--text)',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div style={{ marginTop: '1rem' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', display: 'inline-flex', alignItems: 'center' }}>
                {githubIcon}GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;