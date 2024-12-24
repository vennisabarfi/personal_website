import "./Contact.css";
import { email_icon, linkedin_icon} from "@/About/Constants";
import { Button } from "@/components/ui/button";


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
        "handle": "Send an Email",
        "link": "",
        "icon": email_icon,

    },
]

    return(
        <>

<div className="contact-section">
    
<h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Contact</h2> 


<div className="contact-list">
            {Contact.map((contact)=>(
                    <div className="experience" key={contact.id}> 
                    
                    <Button variant="link"><a href={contact.link} target="_blank">{contact.handle} </a>{contact.icon}</Button>
                    


                    </div>

                    
                ))}

       
    </div>
</div>

        
        </>

    );
}