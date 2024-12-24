import "./Contact.css";
import { email_icon, github_icon, linkedin_icon} from "@/About/Constants";
import { Button } from "@/components/ui/button";
import profile_picture from "./profile-picture.jpg";
import Form from "./Form";


export default  function Contact(){


const Contact = [
    {
        "id": "1",
        "handle": "Vennisa Barfi",
        "link": "https://www.linkedin.com/in/vennisa-owusu-barfi-95155216b/",
        "icon": linkedin_icon,

    },

    {
        "id": "2",
        "handle": "vennisabarfi",
        "link": "https://github.com/vennisabarfi",
        "icon": github_icon,

    },

    {
        "id": "3",
        "handle": "Email Me",
        "link": "vennisabarfi@gmail.com",
        "icon": email_icon,

    },  

]

    return(
        <>

<div className="contact-section">
    
<h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Contact</h2> 


{/* place image and contact list side by side for desktop */}
<div className="image-list"> 

<div className="contact-image">
    <img src={profile_picture} className="image"/>
</div>

<div className="contact-list">
            {Contact.map((contact)=>(
                    <div className="experience" key={contact.id}> 
                    
                    <Button variant="link"><a href={contact.link} target="_blank">{contact.handle} </a>{contact.icon}</Button>
                    


                    </div>

                    
                ))}

       
    </div>
    </div>


    <div className="freelance-contact">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Do you have an Idea you want to bring to life? Let&apos;s Connect.
    </h3>

                <Form/>

    </div>

</div>

        
        </>

    );
}