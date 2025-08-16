import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/Personal-Website">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          Pranav Srinivasan
        </div>
        <div className="nav-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>
            Experience
          </Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "I make stuff";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 150; // milliseconds per character
    
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    };
    
    // Start typing after a small delay
    const startDelay = setTimeout(typeWriter, 500);
    
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(startDelay);
      clearInterval(cursorInterval);
    };
  }, []);

  const WeatheredSword = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" className="weathered-sword">
      <defs>
        <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#8B4513', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#A0522D', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#CD853F', stopOpacity: 1}} />
        </linearGradient>
        <filter id="roughness">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
        </filter>
      </defs>
      
      {/* Sword Blade - Jagged and Weathered */}
      <path 
        d="M20 5 L20 35 M15 8 L25 8 M16 12 L24 12 M17 16 L23 16 M18 20 L22 20 M19 24 L21 24 M20 28 L20 28"
        stroke="url(#swordGradient)" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        filter="url(#roughness)"
        className="sword-blade"
      />
      
      {/* Sword Handle - Worn and Textured */}
      <rect x="18" y="32" width="4" height="6" rx="2" fill="#8B4513" className="sword-handle"/>
      <rect x="17" y="33" width="6" height="4" rx="2" fill="#A0522D" className="sword-handle"/>
      
      {/* Cross Guard - Battle Damaged */}
      <path 
        d="M12 30 Q20 28 28 30 M12 32 Q20 30 28 32"
        stroke="#8B4513" 
        strokeWidth="3" 
        strokeLinecap="round"
        className="sword-crossguard"
      />
      
      {/* Jagged Edge Details */}
      <path d="M15 6 L17 8 L19 6 L21 8 L23 6 L25 8" stroke="#696969" strokeWidth="1" fill="none" className="sword-jagged"/>
      <path d="M15 10 L17 12 L19 10 L21 12 L23 10 L25 12" stroke="#696969" strokeWidth="1" fill="none" className="sword-jagged"/>
      
      {/* Battle Scars and Wear */}
      <circle cx="18" cy="14" r="0.5" fill="#696969" className="sword-scar"/>
      <circle cx="22" cy="18" r="0.5" fill="#696969" className="sword-scar"/>
      <circle cx="19" cy="22" r="0.5" fill="#696969" className="sword-scar"/>
      <circle cx="21" cy="26" r="0.5" fill="#696969" className="sword-scar"/>
    </svg>
  );

  const timelineEvents = [
    {
      year: "Dec 2024 - Current",
      title: "Encando.AI (NSF & TAMU backed)",
      description: (
        <>
          <span className="timeline-event-title">Software Engineer</span>
          <br />
          • Built a virtual Teaching Assistant using Retrieval Augmented Generation (RAG) with LangChain and Pinecone, with Parent Document Retrieval for context augmentation
          <br />
          • Implemented and prompt-tuned Letta agent for homework help functionality; automated promotional content pipeline using Wan2.1 video generator, OAuth, and GCP and published 40+ reels across platforms
          <br />
          • Created pdf transcription pipeline with S3 store and DynamoDB indexing, reducing storage costs 15%
        </>
      ),
      icon: "🤖"
    },
    {
      year: "Mar 2024 - Aug 2024",
      title: "IAM Economics",
      description: (
        <>
          <span className="timeline-event-title">Software Engineer Intern</span>
          <br />
          • Created interactive web application for legal service suite with Next.js, React, and custom RESTful APIs
          <br />
          • Modeled an automated ordered Probit regression for predicting insurance claim valuations using Django, mySQL, and Apache Airflow, reducing RMSE by 23% compared to prior models
          <br />
          • Built YAML pipeline to automate AWS and environment configs and designed CI/CD smoke test framework
          <br />
          • Implemented Redis session storage to manage user auth tokens and reduced retrieval latency 60%
        </>
      ),
      icon: "💼"
    },
    {
      year: "May 2023 - Aug 2023",
      title: "Toyota",
      description: (
        <>
          <span className="timeline-event-title">Machine Learning Engineer Intern</span>
          <br />
          • Designed and implemented an automatic filter integrating ASR, uMAP dimensionality reduction and Mahalanobis distance to remove noise to vehicle voice assistant and improved performance by 18%
          <br />
          • Added N-grams and TF-IDF vectorization to improve accuracy of financial document classification pipeline and yielded a 12% net increase across all models
          <br />
          • Implemented a multi-stage inference pipeline leveraging DistilBERT to perform named entity recognition
        </>
      ),
      icon: "🚗"
    },
    {
      year: "Jun 2022 - Aug 2022",
      title: "Kershner Trading Group",
      description: (
        <>
          <span className="timeline-event-title">Quantitative Trading Intern</span>
          <br />
          • Implemented 10+ execution algorithms for imbalances and 5 different gap-trade price alerts using CloudQuant backtesting and yielded $9,500 over 8 weeks
          <br />
          • Engineered a Random-Forest regression with bagging and boosting in PyTorch to forecast mid-cap equities and achieved 17% return on real assets
          <br />
          • Developed a Gaussian Mixture Model for volume signals to predict moves in index funds with 89% accuracy
        </>
      ),
      icon: "📈"
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="header-section">
            <h1 className="main-title">Pranav Srinivasan</h1>
            <p className="main-subtitle">Builder and Engineer</p>
          </div>
          
          <div className="maker-display">
            <div className="terminal-body">
              <div className="terminal-prompt">$ </div>
              <div className="maker-text">
                {displayText}
                <span className={`terminal-cursor ${showCursor ? 'visible' : ''}`}>|</span>
              </div>
            </div>
          </div>
          
          <div className="features">
            <div className="feature">
              <span className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="feature-svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#0077FF"/>
                  <path d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z" fill="#0077FF"/>
                  <path d="M5 6L5.47 7.76L7.24 8.24L5.47 8.71L5 10.47L4.53 8.71L2.76 8.24L4.53 7.76L5 6Z" fill="#0077FF"/>
                </svg>
              </span>
              <span>Leader</span>
            </div>
            <div className="feature">
              <span className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="feature-svg">
                  <path d="M9.663 17h4.673L12 3 9.663 17zM12 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#0077FF"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0077FF"/>
                </svg>
              </span>
              <span>Ideator</span>
            </div>
            <div className="feature">
              <span className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="feature-svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#0077FF"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0077FF"/>
                </svg>
              </span>
              <span>Executor</span>
            </div>
          </div>
          
          <div className="about-section">
            <h2 className="about-title">About Me</h2>
            <div className="about-content">
              <p>
                I'm a 21 year old computer science graduate from the University of Texas at Austin who is passionate about building services at the intersection of cloud and AI technologies. I've built semantic noise filters at Toyota, conducted at Generative AI research at UT, and am currently building at an NSF-funded EdTech startup that's leveraging LLMs to revolutionize how college students learn. Outside of computer science, I enjoy playing basketball, watching old movies, and listening to rock music.
              </p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/pranav-srinivasan-736170189/" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon linkedin">
                <svg className="social-svg" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="social-label">LinkedIn</span>
            </a>
            
            <a href="https://github.com/pranavSrini" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon github">
                <svg className="social-svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="social-label">GitHub</span>
            </a>
            
            <a href="https://medium.com/@pranavs389" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon medium">
                <svg className="social-svg" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </div>
              <span className="social-label">Medium</span>
            </a>
            
            <a href="mailto:pranavs389@gmail.com" className="social-link">
              <div className="social-icon gmail">
                <svg className="social-svg" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.875l9.637-7.054h.727c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </div>
              <span className="social-label">Email</span>
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}

function Experience() {
  const timelineEvents = [
    {
      year: "Dec 2024 - Current",
      title: "Encando.AI (NSF & TAMU backed)",
      icon: "🚀",
      description: (
        <>
          • Built a virtual Teaching Assistant using Retrieval Augmented Generation (RAG) with LangChain, FAISS vector database, and Parent Document Retrieval<br/><br/>
          • Implemented and prompt-tuned Letta agent for homework help functionality; automated promotional content pipeline using Wan2.1 video generator, OAuth, and GCP<br/><br/>
          • Created document and video transcription pipeline with secure S3 storage and DynamoDB indexing
        </>
      )
    },
    {
      year: "Mar 2024 - Aug 2024",
      title: "IAM Economics",
      icon: "💼",
      description: (
        <>
          • Created interactive web application for legal service suite with Next.js, React, and custom RESTful APIs<br/><br/>
          • Modeled an automated ordered Probit regression for predicting insurance claim valuations using Django, mySQL, and Apache Airflow, reducing RMSE by 23% compared to prior models<br/><br/>
          • Developed YAML script to automate AWS verification and environment configuration for CI/CD pipeline deployments and accelerated company-wide code deployment by 20%
        </>
      )
    },
    {
      year: "May 2023 - Aug 2023",
      title: "Toyota",
      icon: "🏎️",
      description: (
        <>
          • Designed and implemented an automatic filter integrating ASR, uMAP dimensionality reduction and Mahalanobis distance to remove noise to vehicle voice assistant and improved performance by 18%<br/><br/>
          • Added N-grams and TF-IDF vectorization to improve accuracy of financial document classification pipeline and yielded a 12% net increase across all models<br/><br/>
          • Designed and produced a ChatGPT-based prompt-chaining system for language data augmentation
        </>
      )
    },
    {
      year: "Jun 2022 - Aug 2022",
      title: "Kershner Trading Group",
      icon: "📈",
      description: (
        <>
          • Implemented 10+ execution algorithms for imbalances and 5 different gap-trade price alerts using CloudQuant backtesting and yielded $9,500 over 8 weeks<br/><br/>
          • Engineered a Random-Forest regression with bagging and boosting in PyTorch to forecast mid-cap equities and achieved 17% return on real assets<br/><br/>
          • Developed a Gaussian Mixture Model for volume signals to predict moves in index funds with 89% accuracy
        </>
      )
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h1 className="title">Professional Experience</h1>
          
          <div className="timeline-section">
            <h2 className="timeline-title">Work History</h2>
            <p className="timeline-subtitle">A timeline of my professional growth</p>
            <div className="timeline">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <div className="timeline-icon">{event.icon}</div>
                    <div className="timeline-year">{event.year}</div>
                    <h3 className="timeline-event-title">{event.title}</h3>
                    <div className="timeline-description">{event.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="resume-section">
            <a href="https://drive.google.com/file/d/1V0SygO8FGLieLPh2eOlCET9O5focN_Oz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-button">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projectsData = [
    {
      title: "KubeSim",
      technologies: "Docker, Kubernetes, Helm, Prometheus, Fluentd",
      icon: "",
      url: "https://github.com/pranavSrini/KubernetesSims",
      description: (
        <>
          Designed and deployed a cloud-native personal finance tracker as a multi-service Kubernetes application, with UI, API gateway, budgeting, analytics, and notification services<br/><br/>
        </>
      ),
      techLogos: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Helm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
        { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" }
      ]
    },
    {
      title: "GeoGAN",
      technologies: "PyTorch, OpenCV, Scikit-Learn",
      icon: "",
      url: "https://deepnote.com/workspace/Pranav-Srinivasan-65105231-1d54-4355-a58f-4e7b4b5b7d02/project/GAN-Rock-Image-Reconstruction-0f95b2c8-4aca-4c96-bd6d-412f443db968/notebook/d5393806433848a0b48aef14f71b8e52",
      description: (
        <>
          Developed a Deep Convolutional Generative Adversarial Network(DCGAN) for reconstructing images of rock facies under Professor Jose Meijia<br/><br/>
        </>
      ),
      techLogos: [
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      title: "Mula-Fi",
      technologies: "React, PostgreSQL, Flask, Swift, Firebase",
      icon: "",
      url: "https://github.com/pranavSrini/Mula-Fi",
      description: (
        <>
          Created a finance learning tool with infographics and portfolio simulations; Designed and maintained relational schemas in PostgreSQL<br/><br/>
        </>
      ),
      techLogos: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
      ]
    },
    {
      title: "C1",
      technologies: "Linux, TCP Networking, TLS/SSL",
      icon: "",
      url: "#",
      description: (
        <>
          Engineered a Python backdoor that leveraged TLS certificates, systemd manipulation, and symbolic links to obfuscate and persist in Linux systems<br/><br/>
        </>
      ),
      techLogos: [
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SSL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssl/ssl-original.svg" }
      ]
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h1 className="title">Projects</h1>
          
          <div className="projects-section">
            <div className="projects-grid">
              {projectsData.map((project, index) => (
                                      <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                        <div className="project-card">
                          <div className="jagged-dots-left"></div>
                          <div className="jagged-dots-right"></div>
                          <div className="jagged-dots-top"></div>
                          <div className="jagged-dots-bottom"></div>
                          <div className="project-icon">{project.icon}</div>
                          <h3 className="project-title">{project.title}</h3>
                          <div className="project-technologies">{project.technologies}</div>
                          <div className="project-description">{project.description}</div>
                          <div className="tech-logos">
                            {project.techLogos && project.techLogos.map((tech, techIndex) => (
                              <div key={techIndex} className="tech-logo">
                                <img src={tech.logo} alt={tech.name} title={tech.name} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
