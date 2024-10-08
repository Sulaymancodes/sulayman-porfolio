import { useState, useEffect } from 'react';
import { Send, Github, ExternalLink, Code, Sun, Moon } from 'lucide-react';

const NewspaperPortfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const projects = [
    {
      title: "CV-builder",
      description: "A responsive CV Builder that allows users to easily input, edit, and submit personal, educational, and professional information.",
      github: "https://github.com/Sulaymancodes/cv-builder",
      live: "https://cv-builder-sulaymancodes.vercel.app/",
      technologies: ["React", "Tailwind css", "Vite", "Javascript"]
    },
    {
        title: "Insight(Todo List App)",
        description: "A Javascript Todo list app where users can create, manage, set due dates, prioritize tasks, and save their data using localStorage.",
        github: "https://github.com/Sulaymancodes/Insight-todo-app-",
        live: "https://sulaymancodes.github.io/Insight-todo-app-/",
        technologies: ["JavaScript", "Webpack", "date-fns", "localStorage"]
    },
    {
        title: "Weather Forecast Site",
        description: "A responsive weather forecast app that allows users to search for specific locations and provide weather details for that location.",
        github: "https://github.com/Sulaymancodes/weather-app",
        live: "https://sulaymancodes.github.io/weather-app/",
        technologies: ["JavaScript", "Visual Crossing API", "CSS"]
      }      
  ];

  useEffect(() => {
    if (submitResult) {
      const timer = setTimeout(() => {
        setSubmitResult(null); // Hide message after 3 seconds
      }, 2000); // Message disappears after 3 seconds
  
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [submitResult]);
  
  useEffect(() => {
    // Apply the theme to the body element
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('https://formspree.io/f/xdkonbaa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitResult({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitResult({ success: false, message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitResult({ success: false, message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

return (
    <div className={`min-h-screen font-serif ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#f5f5f0] text-black'} transition-colors duration-300`}>
      <header className={`${isDarkMode ? 'bg-gray-900 border-gray-100' : 'bg-[#f5f5f0] border-black'} border-b-8 p-6 relative`}>
        <button 
          onClick={toggleDarkMode} 
          className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-300 text-gray-800 hover:bg-gray-500'} transition-colors duration-300`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <h1 className="text-6xl font-bold text-center font-serif tracking-tight">Sulayman Rabiu</h1>
        <p className="text-center text-sm mt-2 italic">Est. 2023 - Your Source for Web Development Excellence</p>
        <div className={`border-t-2 border-b-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} mt-4 py-2`}>
          <nav className="flex justify-center space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#social-links" className="hover:underline">Socials</a>
          </nav>
        </div>
      </header>
  
      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className={`text-4xl font-bold mb-4 pb-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} border-b-2`}>About Me</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
              Welcome to my Portfolio Website! Im Sulayman, a dedicated frontend developer with a knack for creating engaging digital experiences. With over two years of hands-on experience, I combine aesthetics and functionality to build intuitive interfaces. My passion for clean code and user-centered design drives me to transform innovative ideas into seamless, interactive realities.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} p-4 border-2 ${isDarkMode ? 'border-gray-100' : 'border-black'}`}>
                <h3 className="font-bold text-lg mb-2">Quick Facts about me</h3>
                <ul className="list-disc list-inside">
                  <li>2+ years of frontend experience</li>
                  <li>First class Bsc Software Engineering</li>
                  <li>Always happy to learn something new</li>
                  <li>Interested in Astronomy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section id="projects" className="mb-12">
          <h2 className={`text-4xl font-bold mb-4 pb-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} border-b-2`}>Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`border-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-2 py-1 text-xs rounded`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section id="skills" className="mb-12">
          <h2 className={`text-4xl font-bold mb-4 pb-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} border-b-2`}>Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className={`border-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-bold mb-2 flex items-center">
                <Code size={20} className="mr-2" /> Frontend
              </h3>
              <ul className="list-disc list-inside">
                <li>React.js</li>
                <li>Tailwind Css</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>
            <div className={`border-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-bold mb-2 flex items-center">
                <Code size={20} className="mr-2" /> Backend
              </h3>
              <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className={`border-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-bold mb-2 flex items-center">
                <Code size={20} className="mr-2" /> Tools & Others
              </h3>
              <ul className="list-disc list-inside">
                <li>Git & GitHub</li>
                <li>Webpack</li>
                <li>Jest & Testing Library</li>
                <li>Agile & Waterfall Methodologies</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section id="contact" className="mb-12">
          <h2 className={`text-4xl font-bold mb-4 pb-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} border-b-2`}>Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`mt-1 block w-full border-2 ${isDarkMode ? 'border-gray-100 bg-gray-800' : 'border-gray-800 bg-[#f5f5f0]'} rounded-none shadow-sm p-2`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`mt-1 block w-full border-2 ${isDarkMode ? 'border-gray-100 bg-gray-800' : 'border-gray-800 bg-[#f5f5f0]'} rounded-none shadow-sm p-2`}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className={`mt-1 block w-full border-2 ${isDarkMode ? 'border-gray-100 bg-gray-800' : 'border-gray-800 bg-[#f5f5f0]'} rounded-none shadow-sm p-2`}
              />
            </div>
            <button 
              type="submit" 
              className={`flex items-center justify-center w-full py-2 font-bold text-white rounded ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-black hover:bg-gray-700'} transition-colors duration-300`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : <><Send size={20} className="mr-2" /> Send Message</>}
            </button>
          </form>

          {/* Display success or error message */}
          {submitResult && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
              <div className={`p-4 rounded-md ${submitResult.success ? 'bg-green-600' : 'bg-red-600'} text-white font-bold text-center`}>
                {submitResult.message}
              </div>
            </div>
          )}

      </section>

      <section id="social-links" className="mb-12">
        <h2 className={`text-4xl font-bold mb-4 pb-2 ${isDarkMode ? 'border-gray-100' : 'border-black'} border-b-2`}>Socials Links</h2>
        <div className="flex flex-wrap space-x-6">
            <a href="https://github.com/Sulaymancodes" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:underline mb-2">
            <Github size={24} className="mr-1" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sulaimanrsb/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:underline mb-2">
            <ExternalLink size={24} className="mr-1" /> LinkedIn
            </a>
            <a href="https://x.com/RsbSulayman" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:underline mb-2">
            <ExternalLink size={24} className="mr-1" /> X platform
            </a>
            <a href="https://www.instagram.com/sulaymancodes/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:underline mb-2">
            <ExternalLink size={24} className="mr-1" /> Instagram
            </a>
        </div>
      </section>

    </main>

    <footer className={`bg-black text-gray-100 p-4 text-center ${isDarkMode ? 'border-t-2 border-gray-100 bg-gray-800' : 'border-t-2 border-gray-800'}`}>
      <p>&copy; {new Date().getFullYear()} Sulayman Codes. All rights reserved.</p>
    </footer>
  </div>
);

};

export default NewspaperPortfolio;