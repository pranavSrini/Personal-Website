import React, { useState, useEffect } from 'react';
import img from './mee.jpeg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatMedievalTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const period = hours >= 12 ? 'PM' : 'AM';
    const medievalHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    
    return `${medievalHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;
  };

  const formatMedievalDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

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
          • Built a virtual Teaching Assistant using Retrieval Augmented Generation (RAG) with LangChain, FAISS vector database, and Parent Document Retrieval
          <br />
          • Implemented and prompt-tuned Letta agent for homework help functionality; automated promotional content pipeline using Wan2.1 video generator, OAuth, and GCP
          <br />
          • Created document and video transcription pipeline with secure S3 storage and DynamoDB indexing
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
          • Developed YAML script to automate AWS verification and environment configuration for CI/CD pipeline deployments and accelerated company-wide code deployment by 20%
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
          • Designed and produced a ChatGPT-based prompt-chaining system for language data augmentation
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
          <div className="coat-of-arms">
            <div className="shield">⚔️</div>
          </div>
          
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-image-border">
                <img 
                  src={img}
                  alt="Pranav Srinivasan - Medieval Website Creator" 
                  className="profile-image"
                />
              </div>
              <div className="profile-title">Pranav Srinivasan</div>
              <div className="profile-subtitle">Digital Scribe & Code Artisan</div>
            </div>
          </div>
          
          <h1 className="title">Hark! Greetings, Fair Traveler!</h1>
          <p className="subtitle">Welcome to mine humble digital realm</p>
          
          <div className="time-display">
            <div className="time-label">⏰ The Hour Doth Strike:</div>
            <div className="time-value">{formatMedievalTime(currentTime)}</div>
            <div className="date-value">{formatMedievalDate(currentTime)}</div>
          </div>
          
          <div className="features">
            <div className="feature">
              <span className="feature-icon">
                <WeatheredSword />
              </span>
              <span>Leader</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🏰</span>
              <span>Ideator</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📜</span>
              <span>Executor</span>
            </div>
          </div>
          
          <div className="timeline-section">
            <h2 className="timeline-title">Chronicles of Achievement</h2>
            <p className="timeline-subtitle">A journey through time and accomplishment</p>
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

          <div className="medieval-quote">
            <p>"In the realm of code, where logic doth reign,</p>
            <p>We craft our dreams with joy and pain."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
