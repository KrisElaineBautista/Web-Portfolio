import '../styles/index.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/* =========================================================
   TYPES
========================================================= */

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  github: string;
  images: string[];
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [

  {
    title: 'Talk To My Lawyer',

    description:
      'A mobile-based application for free, on-demand legal consultation, built as an undergraduate capstone project.',

    fullDescription:
      `Talk To My Lawyer is a secure, on-demand legal service mobile application designed to bridge the gap between citizens and accessible legal counsel. Developed as an undergraduate capstone project for the Bachelor of Science in Information Technology program at New Era University's College of Informatics and Computing Studies, the platform democratizes legal aid by simplifying lawyer-client matching and offering secure communication channels for real-time legal advice. It was built to make free legal consultation more accessible, giving users a straightforward way to connect with legal professionals directly from their phones.`,

    techStack: [
      'React Native',
      'Firebase'
    ],

    github: '',

    images: [
      '/images/TTML-App/image1.jpg',
      '/images/TTML-App/image2.jpg',
      '/images/TTML-App/image3.jpg',
      '/images/TTML-App/image4.jpg',
      '/images/TTML-App/image5.jpg',
      '/images/TTML-App/image6.jpg',
    ],
  },


  {
    title: 'StockFlow',

    description:
      'A full-stack inventory management system that helps small businesses track stock, sales, and suppliers in one place.',

    fullDescription:
      `StockFlow is a full-stack inventory management system built to replace the messy mix of spreadsheets, sticky notes, and memory that small businesses often rely on to track their stock. It lets users manage products, log stock movements, record sales, and create purchase orders, all backed by a real-time dashboard that shows exactly what's on the shelf and what needs reordering. The system includes role-based access, giving Admins full control over inventory and reports while Staff can handle day-to-day stock updates and sales. With built-in reporting, StockFlow turns scattered inventory data into a single, reliable source of truth — so nothing gets forgotten and nothing drifts out of sync.`,

    techStack: [
      'React',
      'Node.js',
      'PostgreSQL'
    ],

    github:
      'https://github.com/KrisElaineBautista/StockFlow.git',

    images: [
      '/images/Stockflow/image1.png',
      '/images/Stockflow/image2.png',
      '/images/Stockflow/image3.png',
      '/images/Stockflow/image10.png',
      '/images/Stockflow/image4.png',
      '/images/Stockflow/image5.png',
      '/images/Stockflow/image6.png',
      '/images/Stockflow/image11.png',
      '/images/Stockflow/image7.png',
      '/images/Stockflow/image8.png',
      '/images/Stockflow/image9.png',
      '/images/Stockflow/image12.png',
      '/images/Stockflow/image13.png',
    ],
  },


  {
    title: 'Expense Tracker',

    description:
      'A mobile-first financial management app for tracking income, expenses, and budgets with real-time analytics.',

    fullDescription:
      `ExpenseTracker is a high-performance, mobile-first financial management application built with React Native and Expo. It helps users track their income and expenses, set and manage monthly budgets, and visualize their spending habits through real-time analytics. The app focuses on giving users a clear picture of where their money goes each month, making it easier to stay on top of finances, spot spending trends, and stick to a budget without the friction of manual spreadsheets.`,

    techStack: [
      'React Native',
      'Expo',
      'Firebase'
    ],

    github:
      'https://github.com/KrisElaineBautista/ExpenseTracker.git',

    images: [
      '/images/Expense App/img1.jpg',
      '/images/Expense App/img2.jpg',
      '/images/Expense App/img3.jpg',
      '/images/Expense App/img4.jpg',
      '/images/Expense App/img5.jpg',
      '/images/Expense App/img6.jpg',
      '/images/Expense App/img7.jpg',
      '/images/Expense App/img8.jpg',
      '/images/Expense App/img9.jpg',
    ],
  },


  {
    title: 'Power BI Portfolio',

    description:
      'A collection of interactive Power BI dashboards showcasing data visualization and business intelligence skills.',

    fullDescription:
      `This Power BI Portfolio is a collection of interactive dashboards built using Microsoft Power BI to demonstrate data analysis and visualization skills. Each dashboard turns raw datasets into clear, explorable reports — surfacing trends, comparisons, and key metrics through charts, filters, and interactive elements. The portfolio reflects a focus on business intelligence: taking data that would otherwise sit in spreadsheets and presenting it in a way that's easy to read, drill into, and use for actual decision-making.`,

    techStack: [
      'Power BI'
    ],

    github:
      'https://github.com/KrisElaineBautista/PowerBI-Portfolio.git',

    images: [
      '/images/Powerbi/Adidas_Dashboard.png',
      '/images/Powerbi/Netflix_Dashboard.png',
    ],
  },


  {
    title: 'BMI Calculator',

    description:
      'A mobile BMI calculator app that helps users determine their Body Mass Index.',

    fullDescription:
      `The BMI Calculator app is a clean and simple Android app built with Kotlin. Users can input their height and weight to instantly calculate their Body Mass Index. The app displays a result with a health category — Underweight, Normal, Overweight, or Obese — along with color-coded feedback to make results easy to understand at a glance. It was designed with a minimal, user-friendly interface to make health tracking quick and accessible.`,

    techStack: [
      'Kotlin',
      'Android Studio'
    ],

    github:
      'https://github.com/KrisElaineBautista/BMI-App.git',

    images: [
      '/images/BMI/BMI1.png',
      '/images/BMI/BMI2.png',
    ],
  },


  {
    title: 'Recipe App',

    description:
      'A mobile recipe app that allows users to browse, search, and store their favorite recipes.',

    fullDescription:
      `Krusty Chef is a feature-rich Android recipe app built with Kotlin and Firebase. Users can browse a wide collection of recipes, search by name or ingredient, and save their favorites for quick access later. Recipes are stored and synced in real time using Firebase Firestore, so favorites persist across sessions. The app features a clean card-based layout with category filtering, making it easy to find the right meal for any occasion.`,

    techStack: [
      'Firebase',
      'Android Studio',
      'Kotlin'
    ],

    github:
      'https://github.com/KrisElaineBautista/Recipe-App-Krusty-Chef.git',

    images: [
      '/images/Krustychef-App/Krusty1.png',
      '/images/Krustychef-App/Krusty2.png',
      '/images/Krustychef-App/Krusty3.png',
    ],
  },


  {
    title: 'Lyric App',

    description:
      'A mobile lyric app that allows users to browse song lyrics.',

    fullDescription:
      `The Lyrics Viewer app is an Android application that lets users search for and read song lyrics on the go. Built with Kotlin in Android Studio, it connects to a lyrics API to fetch real-time results based on song title or artist name. The app presents lyrics in a clean, readable format with smooth scrolling — perfect for singing along or reading through your favorite tracks without distractions.`,

    techStack: [
      'Android Studio',
      'Kotlin'
    ],

    github:
      'https://github.com/KrisElaineBautista/Lyrics-Viewer-App.git',

    images: [
      '/images/LyricApp/LYRICS1.png',
      '/images/LyricApp/LYRICS2.png',
    ],
  },

];


/* =========================================================
   GITHUB ICON
========================================================= */

const githubIcon = (

  <svg
    height="20"
    width="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >

    <path
      d="
        M12 0
        C5.37 0 0 5.37 0 12
        c0 5.3 3.438 9.8 8.205 11.387
        .6.113.82-.263.82-.582
        0-.288-.011-1.243-.017-2.252
        -3.338.726-4.042-1.61-4.042-1.61
        -.546-1.387-1.333-1.756-1.333-1.756
        -1.089-.745.083-.729.083-.729
        1.205.085 1.84 1.237 1.84 1.237
        1.07 1.834 2.809 1.304 3.495.997
        .108-.775.418-1.305.762-1.606
        -2.665-.304-5.466-1.332-5.466-5.931
        0-1.31.469-2.381 1.236-3.221
        -.124-.303-.535-1.523.117-3.176
        0 0 1.008-.322 3.301 1.23
        a11.52 11.52 0 0 1 3.003-.404
        c1.018.005 2.045.138 3.003.404
        2.291-1.553 3.297-1.23 3.297-1.23
        .653 1.653.242 2.873.119 3.176
        .77.84 1.235 1.911 1.235 3.221
        0 4.609-2.803 5.625-5.475 5.921
        .43.372.823 1.102.823 2.222
        0 1.606-.015 2.898-.015 3.293
        0 .322.216.699.825.58
        C20.565 21.796 24 17.298 24 12
        c0-6.63-5.37-12-12-12z
      "
    />

  </svg>

);


/* =========================================================
   PROJECT MODAL
========================================================= */

interface ModalProps {
  project: Project;
  onClose: () => void;
}


const Modal = ({
  project,
  onClose,
}: ModalProps) => {

  const [activeIdx, setActiveIdx] =
    useState<number>(0);


  const images: string[] =
    project.images || [];


  const total: number =
    images.length;


  /* =======================================================
     RESET IMAGE WHEN PROJECT CHANGES
  ======================================================= */

  useEffect(() => {

    setActiveIdx(0);

  }, [project]);


  /* =======================================================
     PREVENT BODY SCROLL
  ======================================================= */

  useEffect(() => {

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    return () => {

      document.body.style.overflow =
        originalOverflow;

    };

  }, []);


  /* =======================================================
     PREVIOUS IMAGE
  ======================================================= */

  const prev = () => {

    if (total === 0) return;

    setActiveIdx(
      (current: number) =>
        (current - 1 + total) % total
    );

  };


  /* =======================================================
     NEXT IMAGE
  ======================================================= */

  const next = () => {

    if (total === 0) return;

    setActiveIdx(
      (current: number) =>
        (current + 1) % total
    );

  };


  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  useEffect(() => {

    const handleKeyDown =
      (event: KeyboardEvent) => {

        if (event.key === 'Escape') {

          onClose();

        }

        if (event.key === 'ArrowLeft') {

          prev();

        }

        if (event.key === 'ArrowRight') {

          next();

        }

      };


    document.addEventListener(
      'keydown',
      handleKeyDown
    );


    return () => {

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  });


  /* =======================================================
     MODAL CONTENT
  ======================================================= */

  const modalContent = (

    <div
      className="project-modal-overlay"
      onClick={onClose}
    >

      <style>{`

        /* =========================================
           MODAL OVERLAY
        ========================================= */

        .project-modal-overlay {

          position: fixed;

          inset: 0;

          width: 100vw;

          height: 100vh;

          background:
            rgba(0, 0, 0, 0.75);

          display: flex;

          justify-content: center;

          align-items: center;

          z-index: 9999;

          padding: 1rem;

          box-sizing: border-box;

          isolation: isolate;

        }


        /* =========================================
           MODAL ANIMATION
        ========================================= */

        @keyframes modalIn {

          from {

            opacity: 0;

            transform:
              translateY(24px)
              scale(0.97);

          }

          to {

            opacity: 1;

            transform:
              translateY(0)
              scale(1);

          }

        }


        /* =========================================
           MODAL
        ========================================= */

        .project-modal {

          background:
            var(--bg, #ffffff);

          border-radius:
            18px;

          max-width:
            820px;

          width:
            100%;

          max-height:
            90vh;

          overflow-y:
            auto;

          animation:
            modalIn 0.25s ease;

          box-shadow:
            0 30px 80px
            rgba(0, 0, 0, 0.4);

          color:
            var(--text);

        }


        /* =========================================
           CAROUSEL
        ========================================= */

        .project-carousel {

          position:
            relative;

          background:
            var(--border, #eee);

          border-radius:
            18px 18px 0 0;

          overflow:
            hidden;

          height:
            420px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

        }


        .project-carousel img {

          width:
            100%;

          height:
            420px;

          object-fit:
            contain;

          display:
            block;

        }


        /* =========================================
           CAROUSEL BUTTON
        ========================================= */

        .carousel-btn {

          background:
            rgba(0, 0, 0, 0.45);

          border:
            none;

          color:
            #fff;

          width:
            40px;

          height:
            40px;

          border-radius:
            50%;

          font-size:
            1.5rem;

          cursor:
            pointer;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          transition:
            all 0.2s ease;

          z-index:
            2;

        }


        .carousel-btn:hover {

          background:
            rgba(0, 0, 0, 0.8);

          transform:
            scale(1.05);

        }


        /* =========================================
           CLOSE BUTTON
        ========================================= */

        .modal-close {

          position:
            absolute;

          top:
            0.75rem;

          right:
            0.75rem;

          background:
            rgba(0, 0, 0, 0.5);

          border:
            none;

          color:
            #fff;

          width:
            36px;

          height:
            36px;

          border-radius:
            50%;

          font-size:
            1rem;

          cursor:
            pointer;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          z-index:
            3;

          transition:
            all 0.2s ease;

        }


        .modal-close:hover {

          background:
            rgba(0, 0, 0, 0.85);

          transform:
            rotate(90deg);

        }


        /* =========================================
           DOTS
        ========================================= */

        .modal-dots {

          position:
            absolute;

          bottom:
            0.75rem;

          left:
            50%;

          transform:
            translateX(-50%);

          display:
            flex;

          gap:
            0.4rem;

          z-index:
            2;

        }


        .dot {

          width:
            8px;

          height:
            8px;

          border-radius:
            50%;

          cursor:
            pointer;

          transition:
            all 0.2s ease;

        }


        .dot:hover {

          transform:
            scale(1.3);

        }


        /* =========================================
           MODAL DETAILS
        ========================================= */

        .modal-details {

          padding:
            1.75rem 2rem 2rem;

        }


        .modal-title {

          font-size:
            1.5rem;

          font-weight:
            800;

          color:
            var(--btn-text);

          margin:
            0 0 0.75rem;

        }


        .modal-description {

          line-height:
            1.8;

          color:
            var(--text);

          margin:
            0 0 1.5rem;

        }


        /* =========================================
           TECH STACK
        ========================================= */

        .tech-title {

          font-size:
            0.8rem;

          font-weight:
            700;

          text-transform:
            uppercase;

          letter-spacing:
            0.06em;

          margin-bottom:
            0.5rem;

        }


        .tech-container {

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            0.5rem;

          margin-bottom:
            1.75rem;

        }


        .tech-tag {

          font-size:
            0.78rem;

          padding:
            5px 14px;

          background:
            var(--border);

          border-radius:
            20px;

          font-weight:
            600;

        }


        /* =========================================
           GITHUB
        ========================================= */

        .github-container {

          border-top:
            1px solid var(--border);

          padding-top:
            1.25rem;

        }


        .github-link {

          color:
            var(--text);

          display:
            inline-flex;

          align-items:
            center;

          gap:
            0.5rem;

          text-decoration:
            none;

          font-weight:
            600;

          transition:
            color 0.2s ease;

        }


        .github-link:hover {

          color:
            var(--nav-bg);

        }


        /* =========================================
           MODAL MOBILE
        ========================================= */

        @media (max-width: 768px) {

          .project-modal-overlay {

            padding:
              0.75rem;

          }


          .project-modal {

            max-height:
              94vh;

            border-radius:
              14px;

          }


          .project-carousel {

            height:
              300px;

            border-radius:
              14px 14px 0 0;

          }


          .project-carousel img {

            height:
              300px;

          }


          .modal-details {

            padding:
              1.25rem;

          }


          .modal-title {

            font-size:
              1.3rem;

          }


          .modal-description {

            line-height:
              1.65;

          }

        }


        @media (max-width: 420px) {

          .project-carousel {

            height:
              250px;

          }


          .project-carousel img {

            height:
              250px;

          }


          .modal-details {

            padding:
              1rem;

          }


          .carousel-btn {

            width:
              34px;

            height:
              34px;

          }

        }

      `}</style>


      {/* =========================================
          MODAL CONTAINER
      ========================================= */}

      <div
        className="project-modal"

        onClick={(event) =>
          event.stopPropagation()
        }
      >


        {/* =========================================
            CAROUSEL
        ========================================= */}

        <div
          className="project-carousel"
        >

          {total > 0 ? (

            <img
              key={activeIdx}

              src={images[activeIdx]}

              alt={
                `${project.title} screenshot ${
                  activeIdx + 1
                }`
              }
            />

          ) : (

            <div
              style={{
                fontSize:
                  '5rem',
              }}
            >
              📂
            </div>

          )}


          {/* PREVIOUS */}

          {total > 1 && (

            <button
              className="carousel-btn"

              onClick={prev}

              aria-label="Previous image"

              type="button"

              style={{
                position:
                  'absolute',

                left:
                  '1rem',
              }}
            >
              ‹
            </button>

          )}


          {/* NEXT */}

          {total > 1 && (

            <button
              className="carousel-btn"

              onClick={next}

              aria-label="Next image"

              type="button"

              style={{
                position:
                  'absolute',

                right:
                  '1rem',
              }}
            >
              ›
            </button>

          )}


          {/* CLOSE */}

          <button
            className="modal-close"

            onClick={onClose}

            aria-label="Close project"

            type="button"
          >
            ✕
          </button>


          {/* DOTS */}

          {total > 1 && (

            <div
              className="modal-dots"
            >

              {images.map(
                (_image: string, i: number) => (

                  <button
                    key={i}

                    className="dot"

                    onClick={() =>
                      setActiveIdx(i)
                    }

                    aria-label={
                      `Go to image ${i + 1}`
                    }

                    type="button"

                    style={{
                      border:
                        'none',

                      padding:
                        0,

                      background:
                        i === activeIdx
                          ? '#fff'
                          : 'rgba(255,255,255,0.4)',
                    }}
                  />

                )
              )}

            </div>

          )}

        </div>


        {/* =========================================
            DETAILS
        ========================================= */}

        <div
          className="modal-details"
        >

          <h2
            className="modal-title"
          >
            {project.title}
          </h2>


          <p
            className="modal-description"
          >
            {project.fullDescription ||
              project.description}
          </p>


          {/* TECH STACK */}

          <p
            className="tech-title"
          >
            Tech Stack
          </p>


          <div
            className="tech-container"
          >

            {project.techStack.map(
              (tech: string, idx: number) => (

                <span
                  key={idx}

                  className="tech-tag"
                >
                  {tech}
                </span>

              )
            )}

          </div>


          {/* GITHUB */}

          {project.github && (

            <div
              className="github-container"
            >

              <a
                href={project.github}

                target="_blank"

                rel="noopener noreferrer"

                className="github-link"
              >

                {githubIcon}

                View on GitHub

              </a>

            </div>

          )}

        </div>

      </div>

    </div>

  );


  /* =======================================================
     PORTAL
  ======================================================= */

  return createPortal(
    modalContent,
    document.body
  );
};


/* =========================================================
   PROJECTS PAGE
========================================================= */

const Projects = () => {

  const [
    selectedProject,
    setSelectedProject
  ] = useState<Project | null>(null);


  return (

    <div className="projects-page">

      <style>{`

        /* =========================================
           PROJECT PAGE
        ========================================= */

        .projects-page {

          width:
            100%;

          padding:
            5rem 10% 4rem;

          box-sizing:
            border-box;

        }


        /* =========================================
           HEADER
        ========================================= */

        .projects-header {

          text-align:
            center;

          margin-bottom:
            3rem;

        }


        .projects-header h1 {

          font-size:
            3rem;

          font-weight:
            800;

          color:
            var(--text);

          margin:
            0;

        }


        /* =========================================
           GRID
        ========================================= */

        .projects-grid {

          max-width:
            1200px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(300px, 1fr)
            );

          gap:
            2rem;

        }


        /* =========================================
           PROJECT CARD
        ========================================= */

        .project-card {

          background:
            var(--card);

          border:
            1px solid var(--border);

          border-radius:
            20px;

          overflow:
            hidden;

          cursor:
            pointer;

          box-shadow:
            var(--shadow);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;

          display:
            flex;

          flex-direction:
            column;

          min-width:
            0;

        }


        .project-card:hover {

          transform:
            translateY(-8px);

          box-shadow:
            var(--hover-shadow);

          border-color:
            var(--btn-bg);

        }


        /* =========================================
           PROJECT IMAGE
        ========================================= */

        .project-image-wrapper {

          position:
            relative;

          width:
            100%;

          height:
            220px;

          overflow:
            hidden;

          background:
            var(--border);

        }


        .project-image {

          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          display:
            block;

          transition:
            transform 0.5s ease;

        }


        .project-card:hover
        .project-image {

          transform:
            scale(1.07);

        }


        /* =========================================
           IMAGE OVERLAY
        ========================================= */

        .project-image-wrapper::after {

          content:
            '';

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              to top,
              rgba(0,0,0,0.55),
              transparent 55%
            );

          pointer-events:
            none;

        }


        /* =========================================
           IMAGE LABEL
        ========================================= */

        .project-image-label {

          position:
            absolute;

          left:
            1rem;

          bottom:
            0.9rem;

          z-index:
            2;

          color:
            #fff;

          font-size:
            0.75rem;

          font-weight:
            700;

          letter-spacing:
            0.08em;

          text-transform:
            uppercase;

          background:
            rgba(0,0,0,0.45);

          backdrop-filter:
            blur(8px);

          padding:
            6px 10px;

          border-radius:
            8px;

        }


        /* =========================================
           CARD CONTENT
        ========================================= */

        .project-card-content {

          padding:
            1.5rem;

          display:
            flex;

          flex-direction:
            column;

          flex:
            1;

        }


        .project-card-title {

          color:
            var(--btn-text);

          font-size:
            1.3rem;

          font-weight:
            800;

          margin:
            0 0 0.65rem;

        }


        .project-card-description {

          color:
            var(--text);

          line-height:
            1.6;

          font-size:
            0.9rem;

          margin:
            0 0 1.25rem;

          opacity:
            0.9;

          flex-grow:
            1;

        }


        /* =========================================
           TECH STACK
        ========================================= */

        .project-tech {

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            0.4rem;

          margin-bottom:
            1.2rem;

        }


        .project-tech-tag {

          background:
            var(--border);

          color:
            var(--text);

          padding:
            5px 10px;

          border-radius:
            20px;

          font-size:
            0.72rem;

          font-weight:
            700;

          transition:
            all 0.3s ease;

        }


        .project-card:hover
        .project-tech-tag {

          background:
            var(--btn-bg);

          color:
            var(--btn-text);

        }


        /* =========================================
           CARD FOOTER
        ========================================= */

        .project-card-footer {

          border-top:
            1px solid var(--border);

          padding-top:
            1rem;

          display:
            flex;

          justify-content:
            space-between;

          align-items:
            center;

          gap:
            1rem;

        }


        .view-project {

          color:
            var(--btn-text);

          font-size:
            0.85rem;

          font-weight:
            800;

        }


        .project-github {

          color:
            var(--text);

          display:
            inline-flex;

          align-items:
            center;

          gap:
            0.35rem;

          text-decoration:
            none;

          font-size:
            0.85rem;

          font-weight:
            700;

          transition:
            color 0.2s ease;

        }


        .project-github:hover {

          color:
            var(--nav-bg);

        }


        .project-github svg {

          flex-shrink:
            0;

        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 768px) {

          .projects-page {

            padding:
              4rem 6% 3rem;

          }


          .projects-header {

            margin-bottom:
              2rem;

          }


          .projects-header h1 {

            font-size:
              2.3rem;

          }


          .projects-grid {

            grid-template-columns:
              1fr;

            gap:
              1.25rem;

          }


          .project-image-wrapper {

            height:
              210px;

          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 420px) {

          .projects-page {

            padding-left:
              5%;

            padding-right:
              5%;

          }


          .project-image-wrapper {

            height:
              190px;

          }


          .project-card-content {

            padding:
              1.25rem;

          }


          .project-card-footer {

            align-items:
              flex-start;

            flex-direction:
              column;

          }

        }

      `}</style>


      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="projects-header"
      >

        <h1>
          Projects
        </h1>


        <div
          className="title-underline"

          style={{
            margin:
              '0.5rem auto',
          }}
        />

      </header>


      {/* =================================================
          PROJECT GRID
      ================================================= */}

      <div
        className="projects-grid"
      >

        {projects.map(
          (
            project: Project,
            index: number
          ) => (

            <article
              key={index}

              className="project-card"

              onClick={() =>
                setSelectedProject(project)
              }

              role="button"

              tabIndex={0}

              onKeyDown={(
                event: React.KeyboardEvent<HTMLElement>
              ) => {

                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {

                  event.preventDefault();

                  setSelectedProject(project);

                }

              }}

              aria-label={
                `View ${project.title} project`
              }
            >


              {/* =========================================
                  PROJECT IMAGE
              ========================================= */}

              <div
                className="project-image-wrapper"
              >

                {project.images &&
                project.images.length > 0 ? (

                  <img
                    className="project-image"

                    src={project.images[0]}

                    alt={
                      `${project.title} preview`
                    }

                    loading="lazy"
                  />

                ) : (

                  <div
                    style={{
                      height:
                        '100%',

                      display:
                        'flex',

                      alignItems:
                        'center',

                      justifyContent:
                        'center',

                      fontSize:
                        '4rem',
                    }}
                  >
                    📂
                  </div>

                )}


                <span
                  className="project-image-label"
                >
                  Project Preview
                </span>

              </div>


              {/* =========================================
                  CARD CONTENT
              ========================================= */}

              <div
                className="project-card-content"
              >


                {/* TITLE */}

                <h3
                  className="project-card-title"
                >
                  {project.title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="project-card-description"
                >
                  {project.description}
                </p>


                {/* TECH STACK */}

                <div
                  className="project-tech"
                >

                  {project.techStack.map(
                    (
                      tech: string,
                      idx: number
                    ) => (

                      <span
                        key={idx}

                        className="project-tech-tag"
                      >
                        {tech}
                      </span>

                    )
                  )}

                </div>


                {/* =================================
                    FOOTER
                ================================= */}

                <div
                  className="project-card-footer"
                >

                  <span
                    className="view-project"
                  >
                    View Project →
                  </span>


                  {project.github && (

                    <a
                      href={project.github}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="project-github"

                      onClick={(
                        event
                      ) =>
                        event.stopPropagation()
                      }
                    >

                      {githubIcon}

                      GitHub

                    </a>

                  )}

                </div>

              </div>

            </article>

          )
        )}

      </div>


      {/* =================================================
          PROJECT MODAL
      ================================================= */}

      {selectedProject && (

        <Modal
          project={
            selectedProject
          }

          onClose={() =>
            setSelectedProject(null)
          }
        />

      )}

    </div>

  );
};


export default Projects;
