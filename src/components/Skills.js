import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaPhp, FaGithub, FaDocker } from 'react-icons/fa'; // For Docker and GitHub
import { SiJavascript, SiDjango, SiFlask, SiMongodb, SiMysql, SiPostgresql, SiGit, SiKubernetes, SiMicrosoftazure, SiPostman, SiApachejmeter } from 'react-icons/si'; // For the rest
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-icons">
          {/* React */}
          <div className="skill-icon">
            <FaReact size={60} color="#61DBFB" />
            <span className="tooltiptext">React</span>
          </div>
          {/* Node.js */}
          <div className="skill-icon">
            <FaNodeJs size={60} color="#68A063" />
            <span className="tooltiptext">Node.js</span>
          </div>
          {/* Python */}
          <div className="skill-icon">
            <FaPython size={60} color="#306998" />
            <span className="tooltiptext">Python</span>
          </div>
          {/* JavaScript */}
          <div className="skill-icon">
            <SiJavascript size={60} color="#F7DF1E" />
            <span className="tooltiptext">JavaScript</span>
          </div>
          {/* PHP */}
          <div className="skill-icon">
            <FaPhp size={60} color="#777BB4" />
            <span className="tooltiptext">PHP</span>
          </div>
          {/* Django */}
          <div className="skill-icon">
            <SiDjango size={60} color="#092E20" />
            <span className="tooltiptext">Django</span>
          </div>
          {/* Flask */}
          <div className="skill-icon">
            <SiFlask size={60} color="#000000" />
            <span className="tooltiptext">Flask</span>
          </div>
          {/* HTML5 */}
          <div className="skill-icon">
            <FaHtml5 size={60} color="#E34F26" />
            <span className="tooltiptext">HTML5</span>
          </div>
          {/* CSS3 */}
          <div className="skill-icon">
            <FaCss3Alt size={60} color="#1572B6" />
            <span className="tooltiptext">CSS3</span>
          </div>
          {/* MongoDB */}
          <div className="skill-icon">
            <SiMongodb size={60} color="#47A248" />
            <span className="tooltiptext">MongoDB</span>
          </div>
          {/* MySQL */}
          <div className="skill-icon">
            <SiMysql size={60} color="#F29111" />
            <span className="tooltiptext">MySQL</span>
          </div>
          {/* PostgreSQL */}
          <div className="skill-icon">
            <SiPostgresql size={60} color="#336791" />
            <span className="tooltiptext">PostgreSQL</span>
          </div>
           {/* Git */}
           <div className="skill-icon">
            <SiGit size={60} color="#F05032" />
            <span className="tooltiptext">Git</span>
          </div>
          {/* GitHub */}
          <div className="skill-icon">
            <FaGithub size={60} color="#181717" />
            <span className="tooltiptext">GitHub</span>
          </div>
           {/* Docker */}
           <div className="skill-icon">
            <FaDocker size={60} color="#2496ED" />
            <span className="tooltiptext">Docker</span>
          </div>
          {/* Kubernetes */}
          <div className="skill-icon">
            <SiKubernetes size={60} color="#326CE5" />
            <span className="tooltiptext">Kubernetes</span>
          </div>
          {/* Azure */}
          <div className="skill-icon">
            <SiMicrosoftazure size={60} color="#0078D4" />
            <span className="tooltiptext">Azure</span>
          </div>
          {/* Postman */}
          <div className="skill-icon">
            <SiPostman size={60} color="#FF6C37" />
            <span className="tooltiptext">Postman</span>
          </div>
          {/* JMeter */}
          <div className="skill-icon">
            <SiApachejmeter size={60} color="#D22128" />
            <span className="tooltiptext">JMeter</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
