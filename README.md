# Prajwal D P -  [Portfolio Website Link](https://prajwaldp.netlify.app/)

A personal portfolio website showcasing my skills, projects, achievements, and contact information.

## Project Structure

```
portfolio/
│
├── css/
│   └── styles.css             # Main stylesheet with all styles
│
├── js/
│   └── script.js              # JavaScript functionality
│
├── images/
│   ├── prajwal pic.jpg        # Profile picture
│   ├── dMs.jpg                # Project image (Disaster Management System)
│   ├── tradepro.png           # Project image (Stock Management)
│   ├── college.png            # Project image (College Connect)
│   ├── detox.png              # Project image (Detox Yantra)
│   ├── digital closet.png     # Project image (Digital Closet)
│   └── central.png            # Project image (Branch Management System)
│
├── index.html                 # Main HTML file
├── package.json               # Project dependencies
├── README.md                  # This file
└── DIRECTORY_STRUCTURE.txt    # Detailed directory structure
```

## Features

- Responsive design that works on desktop and mobile devices
- Dark/light mode toggle
- Interactive terminal in the About section
- Project filtering by category
- Contact form
- Resume download option
- Social media links

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome for icons

## Setup

1. Clone the repository
2. Open `index.html` in your browser

### Setting up the Contact Form with EmailJS

To make the contact form send real emails:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{user_name}}`, `{{user_email}}`, `{{subject}}`, and `{{message}}`
4. Get your EmailJS public key from Account > API Keys
5. Update the EmailJS configuration in `index.html`:
   - Replace `YOUR_PUBLIC_KEY` with your actual public key
   - Replace `service_id` with your email service ID
   - Replace `template_id` with your email template ID

## Sections

- **Home**: Introduction and quick links
- **About**: Interactive terminal to learn more about me
- **Projects**: Showcase of my work with filters
- **Achievements**: Key accomplishments
- **Resume**: Professional experience and education
- **Contact**: Ways to get in touch

## Contact

- Email: prajwaldp223@gmail.com
- Phone: +91 8792313624
- Location: K R Circle, Bangalore
- GitHub: [github.com/prajwaldp223](https://github.com/prajwaldp223)
- LinkedIn: [linkedin.com/in/prajwal-d-p-4a9692260](https://www.linkedin.com/in/prajwal-d-p-4a9692260/) 
