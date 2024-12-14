import "./Projects.css";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

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

        <div className="freelance-section">
       

        {Freelance.map((freelance)=>(
                    <div className="experience" key={freelance.id}> 
                    <Card>
  <CardHeader>
    <CardTitle>{freelance.client}</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent className="thumbnail-description">
  <img src={freelance.thumbnail}/>
  <span>{freelance.Description}
  <span>{freelance.website_link}</span> 
  <br/>   
  <span>{freelance.github_link}</span>
  </span>
  
  </CardContent>
  <CardFooter>
    <span>Tools: {freelance.Tools} </span>
  </CardFooter>
</Card>


                    </div>

                    
                ))}
        </div>

        </>
    );
}