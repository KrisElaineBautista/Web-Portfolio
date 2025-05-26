import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git'];

const skillIcons = [
  {
    href: "https://developer.android.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
    alt: "android"
  },
  {
    href: "https://getbootstrap.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    alt: "bootstrap"
  },
  {
    href: "https://www.w3schools.com/css/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css3"
  },
  {
    href: "https://www.figma.com/",
    src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    alt: "figma"
  },
  {
    href: "https://firebase.google.com/",
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    alt: "firebase"
  },
  {
    href: "https://git-scm.com/",
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    alt: "git"
  },
  {
    href: "https://www.w3.org/html/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5"
  },
  {
    href: "https://www.java.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    alt: "java"
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript"
  },
  {
    href: "https://kotlinlang.org",
    src: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
    alt: "kotlin"
  },
  {
    href: "https://www.mongodb.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "mongodb"
  },
  {
    href: "https://www.mysql.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    alt: "mysql"
  },
  {
    href: "https://www.php.net",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    alt: "php"
  },
  {
    href: "https://www.python.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    alt: "python"
  },
  {
    href: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "react"
  },
  {
    href: "https://reactnative.dev/",
    src: "https://reactnative.dev/img/header_logo.svg",
    alt: "reactnative"
  },
  {
    href: "https://www.typescriptlang.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript"
  }
];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: 0,
      listStyle: 'none'
    }}>
      {skills.map((skill, index) => (
        <li key={index} style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          boxShadow: '0 2px 6px var(--shadow)'
        }}>
          {skill}
        </li>
      ))}
    </ul>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
      {skillIcons.map((icon, idx) => (
        <a key={idx} href={icon.href} target="_blank" rel="noreferrer">
          <img src={icon.src} alt={icon.alt} width="40" height="40" />
        </a>
      ))}
    </div>
  </section>
);

export default Skills;