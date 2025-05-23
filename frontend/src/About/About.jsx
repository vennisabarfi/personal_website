import "./About.css";
import { Button } from "@/components/ui/button"
import * as icon from "./Constants"; //import icons
import "../index.css"



export default function About(){
 
    
    const Experience =[
        { "id": 1,
           "Company": "Freelance",
           "Role": "Software Engineer", 
           "Date": "March 2024 - Present",
           "Description": "Collaborated with designers and developers to develop custom websites and software for clients.",
           "Link": "View Freelance Projects",
        },
        { "id": 2,
            "Company": "NKENNE",
            "Role": "Software Engineer",
            "Date":"November 2022 - March 2024",
            "Description": "Developed backend functionalities for a language learning platform with Golang, Node.js and Python.", 
         },
         { "id": 3,
            "Company": "Calvin University",
            "Role": "Computational Physics Intern",
            "Date":"May 2022 - December 2022",
            "Description": "Worked with Research team to model complex atomic and molecular behaviors.", 
         }
]
    
const resume_link_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20"  className="size-5">
<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
</svg>  


    return(


        
        <>
        <div className="about-section">

    
        <div className="summary">
           <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">About Me</h2> 
            <p>
                I&apos;m an engineer passionate about building beautiful and accessible websites and software.
                I have a keen eye for building software that scales; with the end user in mind.
                
                </p>
                <p>
                As a freelancer, I help bring my clients&apos; vision to life by designing and building software that meets their needs. 
            
            {/* work on integrating font style  */}
            <br/>
            <Button className="freelance-link" variant="link"><a href="/projects">View Freelance Work Here</a>{resume_link_icon}</Button>
                </p>
               
        
                <p>
                    When I&apos;m not coding, I love to watch football(soccer), spend time with loved ones, go to the gym and play video games. My DMS are open to chat about fullstack, backend and AI projects
                </p>
            <p className="status">
                I am currently open to new opportunities.
            </p>
        </div>



        <div className="experience">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
       Experience 
      </h2>  
      <div className="resume-link-desktop">
                    {/* link to resume properly */}
                <Button variant="link"><a href="https://drive.google.com/file/d/1eR5IP1qIQvZWkLlGKlixwYtq0rNGDsYt/view?usp=sharing" target="_blank">View Full Resume</a>{resume_link_icon}</Button>
                </div>
        </div>

        {Experience.map((exp)=>(
                    <div className="experience" key={exp.id}> 
                    <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">{exp.Company} - {exp.Role}</h1>
             
                    <p className="text-sm text-muted-foreground">{exp.Date}</p>
                   
                    <h3>{exp.Description}</h3>

                    </div>

                    
                ))}

                
                <div className="resume-link">
                    {/* link to resume properly */}
                <Button variant="link"><a href="https://drive.google.com/file/d/1eR5IP1qIQvZWkLlGKlixwYtq0rNGDsYt/view" target="_blank">View Full Resume</a>{resume_link_icon}</Button>
                </div>


        {/* Tech Stack */}
<div className="tech-section">
    <div>
        <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Tech Stack</h3>
    </div>

    {/* Languages */}
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Languages</h4>
    <div className="tech-icons">
        <span className="python-icon">{icon.python_icon}<span className="tech-label">Python</span></span>
        <span className="go-icon">{icon.go_icon}<span className="tech-label">Golang</span></span>
        <span>{icon.javascript_icon}<span className="tech-label">JavaScript</span></span>
        <span>{icon.html_icon}<span className="tech-label">HTML5</span></span>
        <span>{icon.css_icon}<span className="tech-label">CSS3</span></span>
    </div>

    {/* Frameworks */}
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Frameworks</h4>
    <div className="tech-icons">
        <span className="icon">{icon.react_icon}<span className="tech-label">React JS</span></span>
        <span>{icon.gin_icon}<span className="tech-label">Gin (Golang)</span></span>
        <span>{icon.flask_icon}<span className="tech-label">Flask (Python)</span></span>
        <span>{icon.tailwind_icon}<span className="tech-label">TailwindCSS</span></span>
    </div>
</div>


                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Tools
             </h4>
             <div className="tech-icons">
    <span>{icon.postgresql_icon}<span className="tech-label">Postgresql</span></span>
    <span>{icon.googlecloud_icon}<span className="tech-label">Google Cloud</span></span>
    <span>{icon.git_icon}<span className="tech-label">Git/Github</span></span>
</div>

             

                </div>
            
              
            

            

          
        
        </>
    );
}
