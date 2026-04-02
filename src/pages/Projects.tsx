
import '../styles/index.css';

const projects = [
  {
    title: 'Talk To My Lawyer',
    description: 'A mobile lawyer consultation app featuring an admin web dashboard for managing appointments and legal queries.',
    techStack: ['React Native', 'Firebase', 'JavaScript'],
    github: 'https://github.com/KrisElaineBautista',
  },
  {
    title: 'Hotel Booking Website',
    description: 'A responsive hotel booking platform with room listings, availability checker, and automated booking forms.',
    techStack: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: 'https://github.com/KrisElaineBautista',
  },
   {
    title: 'BMI Calculator',
    description: 'A mobile BMI calculator app that helps users determine their Body Mass Index.',
    techStack: ['Kotlin', 'Android Studio'],
    github: 'https://github.com/KrisElaineBautista/BMI-App.git',
  },
  {
    title: 'Recipe App',
    description: 'a mobile recipe app that allows users to browse and search also store their favorite recipes.',
    techStack: ['Firebase', 'Android Studio', 'Kotlin'],
    github: 'https://github.com/KrisElaineBautista/Recipe-App-Krusty-Chef.git',
  },
   {
    title: 'Lyric App',
    description: 'a mobile lyric app that allows users to browse song lyrics.',
    techStack: ['Android Studio', 'Kotlin'],
    github: 'https://github.com/KrisElaineBautista/Lyrics-Viewer-App.git',
  },
   {
    title: 'TTML Admin Panel',
    description: 'a web-based admin dashboard for managing appointments and legal queries for the Talk to My Lawyer app.',
    techStack: ['Firebase', 'React', 'JavaScript'],
    github: 'https://github.com/KrisElaineBautista/Admin-website.git',
  },
    {
    title: 'Portfolio Website',
    description: 'a website portfolio showcasing my skills and projects.',
    techStack: ['Firebase', 'React', 'JavaScript'],
    github: 'https://github.com/KrisElaineBautista/Web-Portfolio.git',
  },
  


];

const githubIcon = (
  <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.011-1.243-.017-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Projects = () => {
  return (
    <div className="page-container">
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text)' }}>Projects</h1>
        <div className="title-underline" style={{ margin: '0.5rem auto' }}></div>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2rem',
        alignItems: 'stretch' 
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="content-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              margin: 0,
              padding: '2rem',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ color: 'var(--btn-text)', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.description}</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                <strong>Tech Stack:</strong>
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    backgroundColor: 'var(--border)',
                    borderRadius: '15px',
                    fontWeight: '600'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--text)', 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--nav-bg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
              >
                {githubIcon} GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;