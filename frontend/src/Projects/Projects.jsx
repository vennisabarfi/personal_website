import "./Projects.css";
import website from "./website.jpg";
import { python_icon, react_icon } from "@/About/Constants";

export default function Projects(){

    const Freelance=[

        {
            "id": 1,
            "client": "Non Profit Client",
            "thumbnail": website,
            "Description": "Cincy Gay Pages is a nonprofit directory to find LGBT+ resources in Cincinnati.",
            "Tools":"React, Golang, JavaScript, HTML, CSS",
            "website_link": "wwww",
            "github_link": "github"

        },
        {
            "id": 2,
            "client": "Client Portfolio Page",
            "thumbnail": website,
            "Description": "Designed a portfolio page to showcase client's skills",
            "Tools": `${react_icon}, ${python_icon}`,
            "website_link": "wwww",
            "github_link": "github"

        },
        {
            "id": 3,
            "client": "Customer Feedback Management System",
            "thumbnail": website,
            "Description": "Delivered a Customer Feedback Management System, enabling real-time analysis of customer product review",
            "Tools":"Python, Flask, React, JavaScript, HTML, CSS",
            "website_link": "wwww",
            "github_link": "github"

        },
    ]

    
    return(
        <>
        

        <div className="freelance-header">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Freelance Work</h2> 
        </div>

        <div className= "freelance">
        {Freelance.map((freelance)=>(
        <div className="experience" key={freelance.id}> 
        {freelance.client}               
    <div className="thumbnail-description"> 
    <div className="thumbnail"> <img src={freelance.thumbnail}/> </div> 
    <div className="description">
 
    <span>{freelance.Description}</span>
    <br/>
  <span>{freelance.website_link}</span> 
  <br/>   
  <span>{freelance.github_link}</span>
    <span>Tools: {freelance.Tools} </span>

    </div>
    
    </div>
  


                    </div>

                    
                ))}
        </div>



        </>
    );
}