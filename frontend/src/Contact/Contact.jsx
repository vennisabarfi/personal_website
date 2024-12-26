import "./Contact.css";
import { email_icon, github_icon, linkedin_icon, VENNISA_EMAIL, VENNISA_GITHUB, VENNISA_LINKEDIN} from "@/About/Constants";
import { Button } from "@/components/ui/button";
import profile_picture from "./profile-picture.jpg";
import Form from "./Form";
import { Separator } from "@/components/ui/separator";

export default  function Contact(){


const Contact = [
    {
        "id": "1",
        "handle": "Vennisa Barfi",
        "link": VENNISA_LINKEDIN,
        "icon": linkedin_icon,

    },

    {
        "id": "2",
        "handle": "vennisabarfi",
        "link": VENNISA_GITHUB,
        "icon": github_icon,

    },

    {
        "id": "3",
        "handle": "Email Me",
        "icon": email_icon,
        "email": VENNISA_EMAIL,

    },


]

    return(
        <>
        <div className="contact-body">

     

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
                    
                    {contact.link && <Button variant="link"><a href={contact.link} target="_blank">{contact.handle} </a>{contact.icon}</Button>}
                    {contact.email && <Button variant="link"><a href={`mailto: ${contact.email}`} target="_blank">Email Me </a>{email_icon}</Button>}
                   
                    
                    </div>

                    
                ))}
               
                
       
    </div>
    </div>

<br/>

    <div className="freelance-contact">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Have an Idea you want to bring to life? Let&apos;s Connect.
    </h3>
    <Separator className="separator"/>
    

            <div className="form">
            <Form/>
            </div>
              

    </div>

</div>
</div>

        
        </>

    );
}