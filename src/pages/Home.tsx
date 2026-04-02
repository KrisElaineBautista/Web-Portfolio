
import '../styles/index.css'; 
import pic from '../assets/pic.png';
import { useNavigate } from "react-router-dom";

const skills = ['HTML', 'CSS', 'JavaScript', 'React','SQL', 'Git', 'Figma', 'Firebase', 'Android Studio', 'PHP', 'Python', 'Kotlin', 'MongoDB', 'TypeScript'];

const skillIcons = [
  { href: "https://developer.android.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg", alt: "android" },
  { href: "https://getbootstrap.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "bootstrap" },
  { href: "https://www.w3schools.com/css/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "css3" },
  { href: "https://www.figma.com/", src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", alt: "figma" },
  { href: "https://firebase.google.com/", src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "firebase" },
  { href: "https://git-scm.com/", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git" },
  { href: "https://www.w3.org/html/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "html5" },
  { href: "https://www.java.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", alt: "java" },
  { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "javascript" },
  { href: "https://kotlinlang.org", src: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg", alt: "kotlin" },
  { href: "https://www.mongodb.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", alt: "mongodb" },
  { href: "https://www.mysql.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "mysql" },
  { href: "https://www.php.net", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "php" },
  { href: "https://www.python.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "python" },
  { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "react" },
  { href: "https://reactnative.dev/", src: "https://reactnative.dev/img/header_logo.svg", alt: "reactnative" },
  { href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "typescript" }
];

const Home = () => {
  // Move the hook call inside the component!
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 160px)' }}>
      <div className="page-container" style={{ flex: 1 }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '4rem', 
          flexWrap: 'wrap',
          marginBottom: '4rem'
        }}>
          
          <div style={{ flex: '1.5', minWidth: '390px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
              Hi, I'm <span style={{ color: 'var(--btn-text)' }}>Kris Elaine S. Bautista</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text)', marginBottom: '1.5rem' }}>
              4th Year BSIT Student | Aspiring Web Developer
            </p>
            <p style={{ lineHeight: '1.8', opacity: 0.9, marginBottom: '2rem' }}>
              I'm an IT student and tech enthusiast with a passion for web development, software engineering, and IT support. 
              I love solving technical challenges and building efficient solutions from the ground up.
            </p>
            
            <button
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              onClick={() => navigate("/projects")} // This will now work
              >
              View Projects
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            
          </div>

          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
            <div style={{ 
              width: '250px', 
              maxWidth: '250px', 
              borderRadius: '100%', 
              overflow: 'hidden', 
              border: '8px solid var(--border)',
              boxShadow: '0 20px 40px var(--shadow)'
            }}>
              <img src={pic} alt="Kris Elaine" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        <section className="card">
          <h2 style={{ marginBottom: '1.5rem' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            {skills.map((skill, index) => (
              <span key={index} style={{
                padding: '0.6rem 1.2rem',
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {skill}
              </span>
            ))}
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))', 
            gap: '1.5rem',
            alignItems: 'center' 
          }}>
            {skillIcons.map((icon, idx) => (
              <a key={idx} href={icon.href} target="_blank" rel="noreferrer" style={{ transition: 'transform 0.2s' }}>
                <img src={icon.src} alt={icon.alt} style={{ width: '100%', maxWidth: '45px', height: 'auto' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;