// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

// CV Download Functionality
document.getElementById('downloadCvBtn').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Replace with your actual CV file path
  const cvUrl = 'C:/Users/Vedant/Documents/Vedant_Gaikwad_CV.pdf'; 
  const fileName = 'Vedant_Gaikwad_CV.pdf'; // Customize your filename
  
  // Create temporary link
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = fileName;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Add download confirmation
  console.log('CV download started');
});

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Skills Data
const skillsData = {
    frontend: [
        { name: 'HTML', level: 95 },
        { name: 'CSS/SCSS', level: 90 },
        { name: 'JavaScript', level: 85 }
       
    ],
    backend: [
        { name: 'Python', level: 85 },
        { name: 'MYSQL', level: 70 },
        { name: 'PHP', level: 65 }
    ],
    tools: [
        { name: 'Git', level: 60 },
        { name: 'Figma', level: 73 },
        { name: 'AWS', level: 40 }
    ]
};

// Projects Data
const projectsData = [
    {
        title: 'E-LEarning Platfrom - Eduspark',
        description: 'A full-featured online learning platform with variety of feature for both Teacher and Student.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
        image: 'https://via.placeholder.com/600x400?text=E-commerce+Platform',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'IPL Analysis',
        description: 'Analysis of the IPL data of past 2 decades to get useful insights',
        technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
        image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Titanic Surviour Analysis ',
        description: 'Titanic Surviour Analysis gives insights about the surviours.',
        technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
        image: 'https://via.placeholder.com/600x400?text=Portfolio+Template',
        liveUrl: '#',
        codeUrl: '#'
    }
];

// Initialize Skills Section
function initSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    
    for (const category in skillsData) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryDiv.appendChild(categoryTitle);
        
        skillsData[category].forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            
            const skillName = document.createElement('p');
            skillName.textContent = skill.name;
            skillItem.appendChild(skillName);
            
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            
            const skillLevel = document.createElement('div');
            skillLevel.className = 'skill-level';
            skillLevel.style.width = `${skill.level}%`;
            skillLevel.setAttribute('data-level', `${skill.level}%`);
            
            skillBar.appendChild(skillLevel);
            skillItem.appendChild(skillBar);
            categoryDiv.appendChild(skillItem);
        });
        
        skillsContainer.appendChild(categoryDiv);
    }
}

// Initialize Projects Section
function initProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const projectImage = document.createElement('div');
        projectImage.className = 'project-image';
        
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        projectImage.appendChild(img);
        
        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        projectInfo.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = project.description;
        projectInfo.appendChild(description);
        
        const projectTech = document.createElement('div');
        projectTech.className = 'project-tech';
        
        project.technologies.forEach(tech => {
            const techSpan = document.createElement('span');
            techSpan.textContent = tech;
            projectTech.appendChild(techSpan);
        });
        
        projectInfo.appendChild(projectTech);
        
        const projectLinks = document.createElement('div');
        projectLinks.className = 'project-links';
        
        const liveLink = document.createElement('a');
        liveLink.href = project.liveUrl;
        liveLink.target = '_blank';
        liveLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
        projectLinks.appendChild(liveLink);
        
        const codeLink = document.createElement('a');
        codeLink.href = project.codeUrl;
        codeLink.target = '_blank';
        codeLink.innerHTML = '<i class="fab fa-github"></i> Code';
        projectLinks.appendChild(codeLink);
        
        projectInfo.appendChild(projectLinks);
        
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectInfo);
        
        projectsGrid.appendChild(projectCard);
    });
}

// Set Current Year in Footer
function setCurrentYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSkills();
    initProjects();
    setCurrentYear();
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-level');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});
