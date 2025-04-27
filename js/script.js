document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggleSwitch = document.querySelector('#checkbox');
  const currentTheme = localStorage.getItem('theme');

  // Check for saved theme preference or use OS preference
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  } else {
    // Check for OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
      localStorage.setItem('theme', 'dark');
    }
  }

  // Ensure home section is displayed first on page load
  if (window.location.hash === '') {
    window.scrollTo(0, 0);
    // Set home nav link as active by default
    document.querySelectorAll(".nav-links a").forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === "#home") {
        item.classList.add("active");
      }
    });
  }

  // Toggle theme when switch is clicked
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active")
    navLinks.classList.toggle("show")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("show")
    })
  })

  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Terminal functionality
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");

  if (terminalInput && terminalOutput) {
    const aboutData = {
      about: "I am a passionate software developer with a passion for creating innovative solutions. I am also a cybersecurity enthusiast.",
      projects:
        [
          "My notable projects include the development of webapplication like Portfolio, TradePro, Disaster managment system, etc.",

        ],
      project:
        [
          "My notable projects include the development of webapplication like Portfolio, TradePro, Disaster managment system, etc.",

        ],
      hobbies: "When I'm not coding, I enjoy CTF competitions, hiking, listening to music and playing badminton.",
      skills: [
        "Languages: C, C++, Java, JavaScript, HTML, CSS, SQL, Ejs",
        "Web: Node.js, Express",
        "Cloud: Google Cloud Platform",
        "Tools: Git & Github, Cisco Packet Tracer, VMware,Postman,Wireshark",
        "OS: Windows, Linux, MacOS"
      ],
      experience: [
        "Intern - Maalgudi techno labs (2024-Present)",
        "Software Developer - CodersCave (2024)",
        "Data testing and analysis - Phyllo (2024)"
      ],
      education: [
        "B.Tech - University of Visvesvarya College of Engineering (2022-2026)",
        "P.U. -Presidency Pre University College (2020-2022)",
        "SSLC - Jnana Bodhini High School (2020)"
      ],
      contact: "Email: <a href='mailto:prajwaldp223@gmail.com'>prajwaldp223@gmail.com</a> | LinkedIn: <a href='https://www.linkedin.com/in/prajwal-d-p-4a9692260/'>LinkedIn</a>"
    };

    const commands = {
      help: () => {
        return `Available commands: about, projects, hobbies, skills, experience, education, contact, clear`;
      },
      about: () => {
        return aboutData.about;
      },
      projects: () => {
        return aboutData.projects;
      },
      project: () => {
        return aboutData.project;
      },
      hobbies: () => {
        return aboutData.hobbies;
      },
      skills: () => {
        return aboutData.skills.join('<br>');
      },
      experience: () => {
        return aboutData.experience.join('<br>');
      },
      education: () => {
        return aboutData.education.join('<br>');
      },
      contact: () => {
        return aboutData.contact;
      },
      clear: () => {
        terminalOutput.innerHTML = '';
        return '';
      }
    };

    function processCommand(input) {
      const command = input.trim().toLowerCase();

      if (command === '') {
        return '';
      }

      if (commands[command]) {
        return commands[command]();
      } else {
        return `<span class="error">Command not recognized. Type "help" for available commands.</span>`;
      }
    }

    function addOutput(text) {
      if (text) {
        const outputElement = document.createElement('p');
        outputElement.innerHTML = text;
        terminalOutput.appendChild(outputElement);
        // Scroll to bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    }

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const input = terminalInput.value;

        // Add command to output
        addOutput(`<span class="prompt">$</span> <span class="command">${input}</span>`);

        // Process command and display result
        const output = processCommand(input);
        addOutput(output);

        // Clear input field
        terminalInput.value = '';
      }
    });

    // Focus input when clicking anywhere in the terminal
    document.getElementById('terminal').addEventListener('click', () => {
      terminalInput.focus();
    });
  }

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section")
  const navItems = document.querySelectorAll(".nav-links a")

  function setActiveSection() {
    let current = ""
    const scrollPosition = window.scrollY

    // If at top of page, set home as active
    if (scrollPosition < 100) {
      current = "home"
    } else {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (scrollPosition >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
    }

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active")
      }
    })
  }

  // Set active section on page load
  setActiveSection()

  // Update active section on scroll
  window.addEventListener("scroll", setActiveSection)

  // Project Filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      const filterValue = button.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Form Submission with EmailJS
  const btn = document.getElementById('submit-btn');

  document.getElementById('contactForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Sending...';

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Create template parameters object
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
      };

      const serviceID = 'service_on1n3m7';
      const templateID = 'template_w89117w';

      // Send email with template parameters
      emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Animation on scroll (simple version)
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".project-card, .achievement-card, .timeline-item")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial styles for animation
  document.querySelectorAll(".project-card, .achievement-card, .timeline-item").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)
})
