
import '../styles/index.css';

const Contact = () => {
  const socials = [
    {
      name: 'GitHub',
      username: 'KrisElaineBautista',
      description: 'View my projects and code',
      url: 'https://github.com/KrisElaineBautista',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.011-1.243-.017-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
          />
        </svg>
      ),
    },

    {
      name: 'LinkedIn',
      username: 'Connect with me',
      description: 'Professional profile and experience',
      url: 'https://www.linkedin.com/in/kriselainesbautista/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.849 3.37-1.849 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V8.999h3.554v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ),
    },

    {
      name: 'Facebook',
      username: 'Connect with me',
      description: 'Follow me on Facebook',
      url: 'https://www.facebook.com/k.riisselaine',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.092 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.687 4.533-4.687 1.312 0 2.686.236 2.686.236v2.953h-1.513c-1.491 0-1.956.927-1.956 1.878v2.256h3.328l-.532 3.49h-2.796V24C19.612 23.092 24 18.099 24 12.073z"
          />
        </svg>
      ),
    },

    {
      name: 'Instagram',
      username: 'kriiss._e',
      description: 'See more of my updates',
      url: 'https://www.instagram.com/kriiss._e',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.153 1.77 4.92 4.92 0 0 1-1.77 1.153c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.153 4.92 4.92 0 0 1-1.153-1.77c-.163-.46-.349-1.26-.403-2.43C1.175 15.584 1.163 15.204 1.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.92 4.92 0 0 1 2.79 2.95a4.92 4.92 0 0 1 1.77-1.153c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.777c-3.15 0-3.524.012-4.775.069-1.152.052-1.777.245-2.193.408-.55.202-1.013.46-1.456.902-.442.443-.7.906-.902 1.456-.163.416-.356 1.041-.408 2.193-.057 1.251-.069 1.625-.069 4.775s.012 3.524.069 4.775c.052 1.152.245 1.777.408 2.193.202.55.46 1.013.902 1.456.443.442.906.7 1.456.902.416.163 1.041.356 2.193.408 1.251.057 1.625.069 4.775.069s3.524-.012 4.775-.069c1.152-.052 1.777-.245 2.193-.408.55-.202 1.013-.46 1.456-.902.442-.443.7-.906.902-1.456.163-.416.356-1.041.408-2.193.057-1.251.069-1.625.069-4.775s-.012-3.524-.069-4.775c-.052-1.152-.245-1.777-.408-2.193-.202-.55-1.013-.46-1.456-.902-.443-.442-.906-.7-1.456-.902-.416-.163-1.041-.356-2.193-.408-1.251-.057-1.625-.069-4.775-.069zm0 3.022a5.038 5.038 0 1 1 0 10.076 5.038 5.038 0 0 1 0-10.076zm0 8.299a3.261 3.261 0 1 0 0-6.522 3.261 3.261 0 0 0 0 6.522zm6.406-8.5a1.177 1.177 0 1 1-2.354 0 1.177 1.177 0 0 1 2.354 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="contact-page">

      <style>{`

        /* =====================================================
           CONTACT PAGE
        ===================================================== */

        .contact-page {
          min-height: calc(100vh - 160px);

          width: 100%;

          padding: 5rem 10% 4rem;

          box-sizing: border-box;

          position: relative;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .contact-header {
          text-align: center;

          max-width: 800px;

          margin: 0 auto 3rem;
        }


        .contact-header h1 {
          font-size: 3rem;

          font-weight: 800;

          color: var(--text);

          margin: 0;

          transition: color 0.4s ease;
        }


        .contact-header p {
          color: var(--text);

          opacity: 0.85;

          line-height: 1.7;

          margin-top: 1rem;

          font-size: 1rem;
        }


        /* =====================================================
           GRID
        ===================================================== */

        .contact-grid {
          max-width: 1000px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 1.5rem;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .contact-info-card {
          position: relative;

          overflow: hidden;

          display: flex;

          align-items: center;

          gap: 1.25rem;

          min-height: 100px;

          padding: 1.5rem;

          border-radius: 18px;

          background: var(--card);

          border: 1px solid var(--border);

          color: var(--text);

          text-decoration: none;

          box-shadow: var(--shadow);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background-color 0.5s ease;
        }


        /* =====================================================
           CARD GLOW
        ===================================================== */

        .contact-info-card::before {
          content: '';

          position: absolute;

          width: 150px;

          height: 150px;

          border-radius: 50%;

          background: var(--btn-bg);

          opacity: 0.13;

          right: -60px;

          top: -60px;

          transition:
            transform 0.45s ease,
            opacity 0.3s ease;
        }


        .contact-info-card::after {
          content: '';

          position: absolute;

          width: 80px;

          height: 80px;

          border-radius: 50%;

          background: var(--nav-bg);

          opacity: 0.08;

          left: -30px;

          bottom: -30px;

          transition: transform 0.45s ease;
        }


        /* =====================================================
           HOVER
        ===================================================== */

        .contact-info-card:hover {
          transform: translateY(-7px);

          box-shadow: var(--hover-shadow);

          border-color: var(--btn-bg);
        }


        .contact-info-card:hover::before {
          transform: scale(1.7);

          opacity: 0.2;
        }


        .contact-info-card:hover::after {
          transform: scale(1.8);
        }


        /* =====================================================
           ICON
        ===================================================== */

        .contact-icon {
          position: relative;

          z-index: 2;

          width: 58px;

          height: 58px;

          min-width: 58px;

          border-radius: 15px;

          display: flex;

          align-items: center;

          justify-content: center;

          background: var(--btn-bg);

          color: var(--btn-text);

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.12);

          transition:
            transform 0.3s ease,
            background-color 0.4s ease;
        }


        .contact-info-card:hover .contact-icon {
          transform:
            rotate(-5deg)
            scale(1.08);
        }


        .contact-icon svg {
          width: 27px;

          height: 27px;

          display: block;
        }


        /* =====================================================
           CARD TEXT
        ===================================================== */

        .contact-card-text {
          position: relative;

          z-index: 2;

          min-width: 0;
        }


        .contact-card-title {
          margin: 0 0 0.3rem;

          color: var(--btn-text);

          font-size: 1.05rem;

          font-weight: 800;
        }


        .contact-card-value {
          margin: 0 0 0.3rem;

          color: var(--text);

          font-weight: 600;

          font-size: 0.9rem;

          word-break: break-word;
        }


        .contact-card-description {
          margin: 0;

          color: var(--text);

          opacity: 0.7;

          font-size: 0.78rem;

          line-height: 1.4;
        }


        /* =====================================================
           EMAIL / LOCATION
        ===================================================== */

        .contact-static-card {
          cursor: default;
        }


        .contact-static-card:hover {
          transform: translateY(-5px);
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .contact-page {
            padding:
              4rem 6% 3rem;
          }


          .contact-header {
            margin-bottom: 2rem;
          }


          .contact-header h1 {
            font-size: 2.3rem;
          }


          .contact-header p {
            font-size: 0.92rem;
          }


          .contact-grid {
            grid-template-columns: 1fr;

            gap: 1rem;
          }


          .contact-info-card {
            min-height: 90px;

            padding: 1.25rem;
          }

        }


        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 420px) {

          .contact-page {
            padding-left: 5%;

            padding-right: 5%;
          }


          .contact-info-card {
            gap: 1rem;

            padding: 1.1rem;
          }


          .contact-icon {
            width: 50px;

            height: 50px;

            min-width: 50px;

            border-radius: 13px;
          }


          .contact-icon svg {
            width: 23px;

            height: 23px;
          }


          .contact-card-title {
            font-size: 0.98rem;
          }


          .contact-card-value {
            font-size: 0.83rem;
          }


          .contact-card-description {
            font-size: 0.72rem;
          }

        }


        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .contact-info-card,
          .contact-icon,
          .contact-info-card::before,
          .contact-info-card::after {
            transition: none;
          }

        }

      `}</style>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="contact-header">

        <h1>
          Contact Me
        </h1>

        <div
          className="title-underline"
          style={{
            margin: '0.75rem auto 0',
          }}
        />

        <p>
          Let's connect! Whether you're interested in
          collaborating, discussing opportunities, or simply
          talking about technology and software development,
          feel free to reach out.
        </p>

      </header>


      {/* =====================================================
          CONTACT GRID
      ===================================================== */}

      <div className="contact-grid">


        {/* =================================================
            EMAIL
        ================================================= */}

        <a
          className="contact-info-card"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kris.elainebautista@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div className="contact-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >

              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />

              <polyline points="22,6 12,13 2,6" />

            </svg>

          </div>


          <div className="contact-card-text">

            <h3 className="contact-card-title">
              Email
            </h3>

            <p className="contact-card-value">
              kris.elainebautista@gmail.com
            </p>

            <p className="contact-card-description">
              Send me an email
            </p>

          </div>

        </a>


        {/* =================================================
            LOCATION
        ================================================= */}

        <div
          className="contact-info-card contact-static-card"
        >

          <div className="contact-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >

              <path
                d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"
              />

              <circle
                cx="12"
                cy="10"
                r="3"
              />

            </svg>

          </div>


          <div className="contact-card-text">

            <h3 className="contact-card-title">
              Location
            </h3>

            <p className="contact-card-value">
              Philippines
            </p>

            <p className="contact-card-description">
              Based in the Philippines
            </p>

          </div>

        </div>


        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        {socials.map((social) => (

          <a
            key={social.name}
            className="contact-info-card"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >

            <div className="contact-icon">

              {social.icon}

            </div>


            <div className="contact-card-text">

              <h3 className="contact-card-title">
                {social.name}
              </h3>

              <p className="contact-card-value">
                {social.username}
              </p>

              <p className="contact-card-description">
                {social.description}
              </p>

            </div>

          </a>

        ))}

      </div>

    </div>
  );
};

export default Contact;
