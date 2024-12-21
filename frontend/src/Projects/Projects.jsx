import "./Projects.css";
import website from "./website.jpg";
import {css_icon, github_icon, go_icon, html_icon, javascript_icon, postgresql_icon, python_icon, react_icon } from "@/About/Constants";
import { Button } from "@/components/ui/button";
export default function Projects(){





    const Freelance=[

        {
            "id": 1,
            "client": "Non Profit Client",
            "thumbnail": website,
            "Description": "Cincy Gay Pages is a nonprofit directory to find LGBT+ resources in Cincinnati.",
            "Tools":"React, Golang, JavaScript, HTML, CSS",
            "tool_1": react_icon,
            "tool_2": go_icon,
            "tool_3": javascript_icon,
            "tool_4":html_icon,
            "tool_5": css_icon,
            "tool_6": postgresql_icon,
            "website_link": "https://cincygaypages.com/",
            "github_link": "https://github.com/vennisabarfi/CulturalConnect"

        },
        {
            "id": 2,
            "client": "Client Portfolio Page",
            "thumbnail": website,
            "Description": "Designed a portfolio page for a client.",
            "tool_1": react_icon,
            "tool_2": javascript_icon,
            "tool_3":html_icon,
            "tool_4": css_icon,
            "website_link": "wwww",
            "github_link": "github",
           

        },
        {
            "id": 3,
            "client": "Customer Feedback Management System",
            "thumbnail": website,
            "Description": "Delivered a Customer Feedback Management System, enabling real-time analysis of customer product review",
            "Tools":"Python, Flask, React, JavaScript, HTML, CSS",
            "tool_1": python_icon,
            "tool_2": react_icon,
            "tool_3":javascript_icon,
            "tool_4": html_icon,
            "tool_5": css_icon,
            "tool_6": postgresql_icon,
            "website_link": "wwww",
            "github_link": "github"

        },
    ]

    const resume_link_icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
</svg>  


    
    
    return(
        <>
        

        <div className="freelance-header">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Freelance Work</h2> 
        </div>

        <div className= "freelance">
        {Freelance.map((freelance)=>(
        <div className="experience" key={freelance.id}> 
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {freelance.client}  
    </h3>
                 
    <div className="thumbnail-description"> 
    <div className="thumbnail"> <img src={freelance.thumbnail}/> </div> 
    <div className="description">
 
    <span className="free-description">{freelance.Description}</span>
    <br/>
  <div className="links">
    <Button className="website-link" variant="link"><a href={freelance.website_link}>View Website</a>{resume_link_icon}</Button> 
  <Button variant="link">{github_icon}<a href={freelance.github_link}>View Source Code </a></Button>
  </div>
  
  <br/>   
    <span className="tools"><Button variant="ghost">Tools: {freelance.tool_1} {freelance.tool_2} {freelance.tool_3} {freelance.tool_4} {freelance.tool_5}{freelance.tool_6}</Button></span>
   


    </div>
    
    </div>
  


                    </div>

                    
                ))}
        </div>



        </>
    );
}